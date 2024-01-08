"use client";

import React from "react";
import NavigationArrows from "@/components/NavigationArrows";
import LanguageSwitch from "@/components/LanguageSwitch";
import { motion } from "framer-motion";
import DarkModeToggle from "@/components/DarkModeToggle";

interface Props {}

export default function Controls({}: Props) {
  return (
    <>
      <div className="fixed top-0 right-0 z-20 flex items-center gap-2 text-md m-4 text-white">
        <LanguageSwitch />
        <DarkModeToggle />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <NavigationArrows />
      </motion.div>
    </>
  );
}
