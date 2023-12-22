"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("pages.about");

  return (
    <div className="px-4" style={{ width: "35rem" }}>
      <div className="mb-6 text-justify text-gray-800 dark:text-white whitespace-pre-wrap">
        {t("first")}
      </div>
      <div className="text-justify text-gray-800 dark:text-white">
        {t("second")}
      </div>
    </div>
  );
}
