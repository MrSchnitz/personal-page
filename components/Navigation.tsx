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
        const isActive = pathnameSegment === (link.url ? link.url.split("/")[1] : null);
        return (
          <Link key={link.name} href={`/${link.url}`}>
            <button
              className={clsx(
                "py-0.5 px-3 text-xs leading-6 uppercase rounded-full",
                "hover:ring-primary hover:text-primary transition-colors",
                isActive
                  ? "font-semibold ring-2 ring-primary dark:ring-primary text-primary"
                  : "text-neutral-800 ring-1 dark:text-white ring-neutral-800 dark:ring-gray-300",
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
