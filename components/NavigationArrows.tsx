"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "@/utils/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getActiveLink, LINKS } from "@/config/links";
import clsx from "clsx";

export default function NavigationArrows() {
  const [rightArrowPressed, setRightArrowPressed] = useState(false);
  const [leftArrowPressed, setLeftArrowPressed] = useState(false);
  const activeLinkIndexRef = useRef<number>(0);

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
          className="fixed top-0 right-0 h-full flex items-center transition-colors cursor-pointer hover:bg-slate-500/25 text-white hover:text-pink-500"
          onClick={handleRedirectRight}
        >
          <FontAwesomeIcon
            className={clsx(
              "mx-6 text-4xl",
              rightArrowPressed && "text-pink-500",
            )}
            icon={faArrowRight}
          />
        </div>
      )}
      {activeLinkIndex !== 0 && (
        <div
          className="fixed top-0 left-0 h-full flex items-center transition-colors cursor-pointer hover:bg-slate-500/25 text-white hover:text-pink-500"
          onClick={handleRedirectLeft}
        >
          <FontAwesomeIcon
            className={clsx(
              "mx-6 text-4xl",
              leftArrowPressed && "text-pink-500",
            )}
            icon={faArrowLeft}
          />
        </div>
      )}
    </>
  );
}
