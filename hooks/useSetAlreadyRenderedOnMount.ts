"use client";
import { useLayoutEffect, useState } from "react";

const ALREADY_RENDERED = "ALREADY_RENDERED";

export default function useSetAlreadyRenderedOnMount() {
  if (typeof window === "undefined") {
    return false;
  }

  const [alreadyRendered, setAlreadyRendered] = useState<boolean>(
    !!window?.sessionStorage?.getItem(ALREADY_RENDERED),
  );

  useLayoutEffect(() => {
    if (!window?.sessionStorage?.getItem(ALREADY_RENDERED)) {
      window.sessionStorage.setItem(ALREADY_RENDERED, String(true));
    }

    window?.addEventListener("beforeunload", () =>
      window.sessionStorage.removeItem(ALREADY_RENDERED),
    );

    return () => {
      window?.removeEventListener("beforeunload", () =>
        window.sessionStorage.removeItem(ALREADY_RENDERED),
      );
    };
  }, []);

  return alreadyRendered;
}
