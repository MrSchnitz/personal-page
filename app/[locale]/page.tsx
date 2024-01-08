import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("pages.home");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white">
        <img
          className="w-40 h-40 mb-6 rounded-full object-cover"
          src="/images/me.jpg"
          alt="Jan"
          style={{ objectPosition: "10%" }}
        />
        <h1 className="mx-auto text-3xl font-bold tracking-wider text-center">
          {t("title")}
        </h1>
        <hr className="w-16 my-6 border-neutral-500 dark:border-gray-300" />
        <h2 className="text-lg tracking-wider text-center">{t("subtitle")}</h2>
      </div>
    </div>
  );
}
