import React from "react";
import Skill from "@/components/Skill";

export default function SkillsPage() {
  return (
    <div
      className="flex flex-wrap gap-x-10 gap-y-8 justify-around text-white"
      style={{ width: "35rem" }}
    >
      <Skill title="JavaScript" icon="js" />
      <Skill title="TypeScript" icon="ts" />
      <Skill title="HTML" icon="html" />
      <Skill title="CSS" icon="css" />
      <Skill title="SCSS" icon="sass" />
      <Skill title="Java" icon="java" />
      <Skill title="Git" icon="git" />
      <Skill title="NodeJS" icon="nodejs" />
      <Skill title="React" icon="react" />
      <Skill title="Redux" icon="redux" />
      <Skill title="NextJS" icon="nextjs" />
      <Skill title="Svelte" icon="svelte" />
      <Skill title="Tailwind CSS" icon="tailwind" />
      <Skill title="NestJS" icon="nestjs" />
      <Skill title="Spring Boot" icon="springboot" />
      <Skill title="MongoDB" icon="mongo" />
      <Skill title="PostgreSQL" icon="postgresql" />
      <Skill title="Figma" icon="figma" />
      <Skill title="Adobe After Effects" icon="afterEffects" />
      <Skill title="Adobe Premiere Pro" icon="premierePro" />
      <Skill title="Adobe Photoshop" icon="photoshop" />
    </div>
  );
}
