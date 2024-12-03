import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  imgSrc: string;
  imgSrcWhite?: string;
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
  imgSrcWhite,
  title,
  link,
  date,
  position,
  description,
  location,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row md:items-start gap-2 md:gap-4",
        className
      )}
    >
      <a href={link} target="_blank" className="shrink-0 self-center">
        <Image
          src={imgSrc}
          alt=""
          width={150}
          height={150}
          className="object-cover transition-all duration-300 cursor-pointer hover:scale-105 dark:hidden"
        />
        {imgSrcWhite && (
          <Image
            src={imgSrcWhite}
            alt=""
            width={150}
            height={150}
            className="object-cover transition-all duration-300 cursor-pointer hover:scale-105 hidden dark:block"
          />
        )}
      </a>
      <div className="text-sm text-neutral-800 dark:text-white">
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
