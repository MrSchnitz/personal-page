import Experience from "@/components/Experience";
import { getSessionStorageItem } from "@/utils/storage";
import { useTranslations } from "next-intl";

const DESCRIPTION_LINES_KIWI = 10;
const DESCRIPTION_LINES_SEZNAM = 8;
const DESCRIPTION_LINES_TIETO = 5;

export default function ExperiencesPage() {
  const t = useTranslations("pages.experiences");

  const decriptionKiwi = [...Array(DESCRIPTION_LINES_KIWI)].map((_, index) =>
    t(`kiwi.description.line${index + 1}`)
  );
  const decriptionSeznam = [...Array(DESCRIPTION_LINES_SEZNAM)].map((_, index) =>
    t(`seznam.description.line${index + 1}`)
  );
  const decriptionTieto = [...Array(DESCRIPTION_LINES_TIETO)].map((_, index) =>
    t(`tieto.description.line${index + 1}`)
  );

  return (
    <div className="md:max-w-ex-page-m lg:max-w-fit">
      <Experience
        className="mb-6"
        link="https://www.kiwi.com/cz/pages/content/about"
        imgSrc={`/images/kiwi.png`}
        imgSrcWhite={`/images/kiwi_white.png`}
        title={t("kiwi.title")}
        date={t("kiwi.date")}
        position={t("kiwi.position")}
        location={t("kiwi.location")}
        description={decriptionKiwi}
      />
      <Experience
        className="mb-6"
        link="https://o.seznam.cz/"
        imgSrc={"/images/seznam.png"}
        imgSrcWhite={"/images/seznam_white.png"}
        title={t("seznam.title")}
        date={t("seznam.date")}
        position={t("seznam.position")}
        location={t("seznam.location")}
        description={decriptionSeznam}
      />
      <Experience
        link="https://www.tieto.com/cz/"
        imgSrc={"/images/tieto.png"}
        imgSrcWhite={"/images/tieto_white.png"}
        title={t("tieto.title")}
        date={t("tieto.date")}
        position={t("tieto.position")}
        location={t("tieto.location")}
        description={decriptionTieto}
      />
    </div>
  );
}
