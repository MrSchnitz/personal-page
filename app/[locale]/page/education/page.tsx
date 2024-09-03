import React from "react";
import Education from "@/components/Education";
import { useTranslations } from "next-intl";

export default function EducationPage() {
  const t = useTranslations("pages.education");
  return (
    <>
      <Education
        className="mb-6"
        imgSrc="/images/vsb.png"
        link="https://www.fei.vsb.cz/cs/index.html"
        title={t("vsb-ing.title")}
        location={t("vsb-ing.location")}
        study={t("vsb-ing.study")}
        year={t("vsb-ing.year")}
        program={t("vsb-ing.program")}
        specialization={t("vsb-ing.specialization")}
      />
      <Education
        imgSrc="/images/vsb.png"
        link="https://www.fei.vsb.cz/cs/index.html"
        title={t("vsb-bc.title")}
        location={t("vsb-bc.location")}
        study={t("vsb-bc.study")}
        year={t("vsb-bc.year")}
        program={t("vsb-bc.program")}
        specialization={t("vsb-bc.specialization")}
      />
    </>
  );
}
