"use client";

import React from "react";
import NavigationArrows from "@/components/NavigationArrows";
import LanguageSwitch from "@/components/LanguageSwitch";
import { motion } from "framer-motion";

interface Props {}

export default function Controls({}: Props) {
  return (
    <>
      <LanguageSwitch />
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
