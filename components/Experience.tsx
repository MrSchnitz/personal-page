import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  imgSrc: string;
  title: string;
  link: string;
  date: string;
  position: string;
  location: string;
  description: string[];
  className?: string;
}

export default function Experience({
  imgSrc,
  title,
  link,
  date,
  position,
  description,
  location,
  className,
}: Props) {
  return (
    <div className={clsx("flex items-start gap-4", className)}>
      <a href={link} target="_blank" className="shrink-0">
        <img
          src={imgSrc}
          alt=""
          width={150}
          height={150}
          className="object-cover transition-all duration-300 cursor-pointer hover:scale-105"
        />
      </a>
      <div className="text-sm">
        <strong className="text-md font-bold">{title}</strong>
        <p className="font-semibold">{position}</p>
        <p>{date}</p>
        <p>{location}</p>
        <ul className="list-disc list-inside">
          {description.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
