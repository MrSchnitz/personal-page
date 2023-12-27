import { useEffect, useState } from "react";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const THRESHOLD = 20

export default function useScrolledOut() {
  const [scrolledOut, setScrolledOut] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!isDesktop) {
      if (window.scrollY > THRESHOLD) {
        setScrolledOut(true);
      } else {
        setScrolledOut(false);
      }
      window.addEventListener("scroll", (event) => {
        if (window.scrollY > THRESHOLD) {
          setScrolledOut(true);
        } else {
          setScrolledOut(false);
        }
      });
    }
  }, []);

  return scrolledOut;
}
