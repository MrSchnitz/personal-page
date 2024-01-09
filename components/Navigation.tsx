import React from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { Link } from "@/utils/navigation";
import { LINKS } from "@/config/links";

export default function Navigation() {
  const pathnameSegment = useSelectedLayoutSegment();
  const t = useTranslations("navigation");

  return (
    <div className="flex flex-wrap gap-4 md:gap-2 justify-center leading-6 px-10 md:px-0">
      {LINKS.map((link) => {
        const isActive = pathnameSegment === (link.url ? link.url : null);
        return (
          <Link key={link.name} href={`/${link.url}`}>
            <button
              className={clsx(
                "py-0.5 px-3 text-xs leading-6 uppercase border rounded-full",
                "hover:border-primary hover:text-primary transition-colors",
                isActive
                  ? "font-semibold border-2 border-primary dark:border-primary text-primary"
                  : "text-neutral-800 dark:text-white border-neutral-800 dark:border-gray-300",
              )}
            >
              {t(link.name)}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
