"use client";

import Navigation from "@/components/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";
import React, { useCallback, useState } from "react";
import useSetAlreadyRenderedOnMount from "@/hooks/useSetAlreadyRenderedOnMount";
import LanguageSwitch from "@/components/LanguageSwitch";
import clsx from "clsx";

export default function LayoutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mainSectionHeight, setMainSectionHeight] = useState<number>(0);
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const alreadyRendered = useSetAlreadyRenderedOnMount();

  const measureCallBack = useCallback((ref: HTMLDivElement | null) => {
    setMainSectionHeight(
      (ref?.firstChild as HTMLDivElement)?.scrollHeight ?? 0,
    );
  }, []);

  const onTransitionEnd = () => {
    setIsRendered(true);
  };

  return (
    <>
      <LanguageSwitch />
      <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 transition duration-1000 ease-in-out dark:text-white dark:bg-blueGray-700">
        <div
          style={{ minWidth: "35rem", maxWidth: "fit-content" }}
          className="flex flex-col items-center justify-center w-3/5"
        >
          <motion.div
            layoutId="nav"
            initial={{ opacity: alreadyRendered ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={alreadyRendered ? {} : { duration: 0.5, delay: 2.2 }}
          >
            <Navigation />
          </motion.div>
          <motion.div
            layoutId="border-div"
            className={clsx(
              "flex flex-col items-center justify-center w-full my-6 border-t-2 border-b-2 border-gray-300 dark:border-white",
              !alreadyRendered && !isRendered && "overflow-hidden",
            )}
            initial={{
              scaleX: alreadyRendered ? 1 : 0,
              height: alreadyRendered ? "100%" : 0,
              opacity: alreadyRendered ? 1 : 0,
            }}
            animate={{
              scaleX: 1,
              opacity: 1,
              height: alreadyRendered ? "100%" : `${mainSectionHeight}px`,
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0 },
              scaleX: { duration: 1, delay: 0.45 },
              height: { duration: 1, delay: 1.3 },
            }}
            ref={measureCallBack}
            onTransitionEnd={onTransitionEnd}
          >
            <motion.div
              className="py-8 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={alreadyRendered ? {} : { duration: 1, delay: 1 }}
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
            transition={alreadyRendered ? {} : { duration: 0.5, delay: 2.2 }}
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </>
  );
}
