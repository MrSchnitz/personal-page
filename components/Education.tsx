import React from "react";
import clsx from "clsx";

interface Props {
  imgSrc: string;
  link: string;
  title: string;
  year: string;
  location: string;
  program: string;
  study: string;
  specialization: string;
  className?: string;
}

export default function Education({
  imgSrc,
  link,
  title,
  year,
  program,
  study,
  location,
  specialization,
  className,
}: Props) {
  return (
    <div className={clsx("flex items-start gap-4", className)}>
      <a href={link} target="_blank" className="shrink-0">
        <img
          src={imgSrc}
          alt=""
          width={60}
          height={60}
          className="rounded object-cover transition-all duration-300 cursor-pointer hover:scale-105"
        />
      </a>
      <div className="text-sm">
        <strong className="text-md font-bold">{title}</strong>
        <p className="font-semibold">{study}</p>
        <p>{location}</p>
        <p>{program}</p>
        <p>{specialization}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}
