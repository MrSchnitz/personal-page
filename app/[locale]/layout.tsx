import "./globals.css";
import React from "react";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/utils/navigation";
import Controls from "@/components/Controls";
import { SceneBackground } from "@/components/SceneBackground";

export const metadata: Metadata = {
  title: "Jan Bauer - personal page",
  description: "",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale ?? "en"} className="dark">
      <body>
        <NextIntlClientProvider locale={locale ?? "en"} messages={messages}>
          <SceneBackground />
          <Controls />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
