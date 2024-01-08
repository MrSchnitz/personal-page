"use client";

import { Link, locales, usePathname } from "@/utils/navigation";
import { usePathname as useNextPathname } from "next/navigation";
import clsx from "clsx";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const fullPathname = useNextPathname();

  const [en, cz] = locales;

  return (
    <div className="text-neutral-600 dark:text-white transition-colors">
      <Link
        className={clsx(
          "hover:text-primary",
          fullPathname.includes(en) && "text-primary",
        )}
        href={pathname}
        locale={en}
      >
        EN
      </Link>
      <span className="mx-1">/</span>
      <Link
        className={clsx(
          "hover:text-primary",
          fullPathname.includes(cz) && "text-primary",
        )}
        href={pathname}
        locale={cz}
      >
        CZ
      </Link>
    </div>
  );
}
