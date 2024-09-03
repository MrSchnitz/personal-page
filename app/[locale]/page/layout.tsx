import React from "react";

import { Metadata } from "next";
import Controls from "@/components/Controls";

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
  return (
    <>
      <Controls />
      {children}
    </>
  );
}
