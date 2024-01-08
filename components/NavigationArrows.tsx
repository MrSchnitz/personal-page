"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "@/utils/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getActiveLink, LINKS } from "@/config/links";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function NavigationArrows() {
  const [rightArrowPressed, setRightArrowPressed] = useState(false);
  const [leftArrowPressed, setLeftArrowPressed] = useState(false);
  const activeLinkIndexRef = useRef<number>(0);
  const t = useTranslations("navigationArrows");

  const pathnameSegment = useSelectedLayoutSegment();
  const { push } = useRouter();
  const activeLinkIndex = getActiveLink(pathnameSegment);

  useEffect(() => {
    activeLinkIndexRef.current = getActiveLink(pathnameSegment);
  }, [pathnameSegment]);

  const handleRedirectRight = () => {
    if (activeLinkIndexRef.current !== LINKS.length - 1) {
      push(`/${LINKS[activeLinkIndexRef.current + 1].url}`);
      setRightArrowPressed(true);
      setTimeout(() => {
        setRightArrowPressed(false);
      }, 300);
    }
  };

  const handleRedirectLeft = () => {
    if (activeLinkIndexRef.current !== 0) {
      push(`/${LINKS[activeLinkIndexRef.current - 1].url}`);
      setLeftArrowPressed(true);
      setTimeout(() => {
        setLeftArrowPressed(false);
      }, 300);
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowRight":
          handleRedirectRight();
          break;
        case "ArrowLeft":
          handleRedirectLeft();
          break;
        default:
          break;
      }
    },
    [pathnameSegment],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {activeLinkIndex !== LINKS.length - 1 && (
        <div
          className="fixed top-0 right-0 h-full hidden md:flex items-center transition-colors cursor-pointer lg:hover:bg-slate-500/25 text-neutral-400 dark:text-white hover:text-primary group/arrow"
          onClick={handleRedirectRight}
        >
          <div className="relative flex flex-col items-center gap-2 mx-2">
            <FontAwesomeIcon
              className={clsx(
                "mx-6 text-4xl",
                rightArrowPressed && "text-primary",
              )}
              icon={faArrowRight}
            />
            <span className="absolute -bottom-6 whitespace-nowrap text-xs text-primary transition-all duration-700 opacity-0 group-hover/arrow:opacity-100">
              {t("right")}
            </span>
          </div>
        </div>
      )}
      {activeLinkIndex !== 0 && (
        <div
          className="fixed top-0 left-0 h-full hidden md:flex items-center transition-colors cursor-pointer lg:hover:bg-slate-500/25 text-neutral-400 dark:text-white hover:text-primary group/arrow"
          onClick={handleRedirectLeft}
        >
          <div className="relative flex flex-col items-center gap-2 mx-2">
            <FontAwesomeIcon
              className={clsx(
                "mx-6 text-4xl",
                leftArrowPressed && "text-primary",
              )}
              icon={faArrowLeft}
            />
            <span className="absolute -bottom-6 whitespace-nowrap text-xs text-primary transition-all duration-700 opacity-0 group-hover/arrow:opacity-100">
              {t("left")}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
