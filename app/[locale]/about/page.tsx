"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("pages.about");

  return (
    <div className="md:px-4 w-full md:max-w-basic-page">
      <div className="mb-6 text-justify text-neutral-700 dark:text-white whitespace-pre-wrap">
        {t("first")}
      </div>
      <div className="text-justify text-neutral-800 dark:text-white">
        {t("second")}
      </div>
    </div>
  );
}
