import React from "react";
import clsx from "clsx";

const IMG_PATH = "/images/logos.svg";

interface Props {
  title: string;
  icon: string;
  className?: string;
}

export default function Skill({ icon, title, className }: Props) {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center gap-1 cursor-help transition-colors hover:text-pink-500 group/item",
        className,
      )}
    >
      <svg className="w-12 h-12">
        <use xlinkHref={`${IMG_PATH}#${icon}`} />
      </svg>
      <div className="absolute -bottom-6 overflow-hidden">
        <p className="text-sm whitespace-nowrap -translate-y-full opacity-0 text-pink-500 transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
          {title}
        </p>
      </div>
    </div>
  );
}
