"use client";

import { Link, locales, usePathname } from "@/utils/navigation";
import { usePathname as useNextPathname } from "next/navigation";
import clsx from "clsx";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const fullPathname = useNextPathname();

  const [en, cz] = locales;

  return (
    <div className="fixed top-0 right-0 z-10 text-md m-4 text-white">
      <Link
        className={clsx(
          "transition-colors hover:text-pink-500",
          fullPathname.includes(en) && "text-pink-500",
        )}
        href={pathname}
        locale={en}
      >
        EN
      </Link>
      <span className="mx-1">/</span>
      <Link
        className={clsx(
          "transition-colors hover:text-pink-500",
          fullPathname.includes(cz) && "text-pink-500",
        )}
        href={pathname}
        locale={cz}
      >
        CZ
      </Link>
    </div>
  );
}
