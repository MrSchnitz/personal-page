import React from "react";

const IMG_PATH = "/images/logos.svg";

interface Props {
  title: string;
  icon: string;
}

export default function Skill({ icon, title }: Props) {
  return (
    <div className="relative flex flex-col items-center gap-1 cursor-help transition-colors hover:text-pink-500 group/item">
      <svg className="w-10 h-10">
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
