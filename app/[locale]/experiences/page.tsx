import Experience from "@/components/Experience";
import { useTranslations } from "next-intl";

export default function ExperiencesPage() {
  const t = useTranslations("pages.experiences");

  return (
    <div>
      <Experience
        className="mb-6"
        link="https://www.kiwi.com/cz/pages/content/about"
        imgSrc={"/images/kiwi.png"}
        title={t("kiwi.title")}
        date={t("kiwi.date")}
        position={t("kiwi.position")}
        location={t("kiwi.location")}
        description={[t("kiwi.description.line1"), t("kiwi.description.line2")]}
      />
      <Experience
        className="mb-6"
        link="https://o.seznam.cz/"
        imgSrc={"/images/seznam.png"}
        title={t("seznam.title")}
        date={t("seznam.date")}
        position={t("seznam.position")}
        location={t("seznam.location")}
        description={[
          t("seznam.description.line1"),
          t("seznam.description.line2"),
        ]}
      />
      <Experience
        link="https://www.tieto.com/cz/"
        imgSrc={"/images/tieto.png"}
        title={t("tieto.title")}
        date={t("tieto.date")}
        position={t("tieto.position")}
        location={t("tieto.location")}
        description={[
          t("tieto.description.line1"),
          t("tieto.description.line2"),
        ]}
      />
    </div>
  );
}
