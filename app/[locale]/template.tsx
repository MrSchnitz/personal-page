"use client";

import Navigation from "@/components/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";
import React, { useCallback, useEffect, useState } from "react";
import useSetAlreadyRenderedOnMount from "@/hooks/useSetAlreadyRenderedOnMount";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useScrolledOut from "@/hooks/useScrolledOut";

export default function LayoutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mainSectionHeight, setMainSectionHeight] = useState<number>(0);
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const alreadyRendered = useSetAlreadyRenderedOnMount();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isScrolledOut = useScrolledOut();

  const measureCallBack = useCallback((ref: HTMLDivElement | null) => {
    setMainSectionHeight(
      (ref?.firstChild as HTMLDivElement)?.scrollHeight ?? 0,
    );
  }, []);

  const onTransitionEnd = () => {
    setIsRendered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-6 md:p-0 w-full md:h-screen text-gray-800 transition duration-1000 ease-in-out text-white">
      <motion.div
        layoutId="nav"
        className={clsx(
          "sticky py-16 md:p-0 -mx-6 md:m-0 top-0 overflow-hidden md:overflow-visible navigation-scroll",
          isScrolledOut && "navigation-scroll--show md:glass-hide",
        )}
        initial={{ opacity: alreadyRendered ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={
          alreadyRendered ? {} : { duration: 0.5, delay: isDesktop ? 2.2 : 1 }
        }
      >
        <Navigation />
      </motion.div>
      <div className="flex flex-col items-center justify-center w-full md:min-w-basic-page-m lg:min-w-basic-page md:max-w-fit">
        <motion.div
          layoutId="border-div"
          className={clsx(
            "flex flex-col items-center justify-center w-full mb-3 md:my-6 border-none md:border-solid border-t-2 border-b-2 border-gray-300 dark:border-white",
            !alreadyRendered && !isRendered && "overflow-hidden",
          )}
          initial={{
            scaleX: alreadyRendered || !isDesktop ? 1 : 0,
            height: alreadyRendered || !isDesktop ? "100%" : 0,
            opacity: alreadyRendered ? 1 : 0,
            y: !alreadyRendered && !isDesktop ? 100 : 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
            height:
              alreadyRendered || !isDesktop ? "100%" : `${mainSectionHeight}px`,
            y: 0,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0 },
            scaleX: { duration: 1, delay: 0.45 },
            height: { duration: 1, delay: 1.3 },
            y: { duration: 1, delay: 0.2 },
          }}
          ref={measureCallBack}
          onTransitionEnd={onTransitionEnd}
        >
          <motion.div
            className="pb-8 md:py-8 w-full grid place-content-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              alreadyRendered || !isDesktop ? {} : { duration: 1, delay: 1 }
            }
          >
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.div
          layoutId="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            alreadyRendered
              ? {}
              : { duration: 0.5, delay: isDesktop ? 2.2 : 1.4 }
          }
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
