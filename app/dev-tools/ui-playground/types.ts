export type PlaygroundUsage = {
  whenToUse: string[];
  avoidWhen: string[];
  rules: string[];
  a11y: string[];
  edgeCases: string[];
};

import type { ReactElement } from "react";

export type PlaygroundVariant = {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  render: () => ReactElement;
  code?: string;
};

export type PlaygroundContext = {
  title: string;
  description?: string;
  render: () => ReactElement;
};

export type PlaygroundStory = {
  id: string;
  title: string; // ex: "Atoms/Button"
  componentName: string;
  componentPath?: string;
  componentSource?: string;
  description?: string;
  usage: PlaygroundUsage;
  variants: PlaygroundVariant[];
  contexts?: PlaygroundContext[];
};

export type PlaygroundSection = "Atoms" | "Molecules" | "Organisms" | "Other";

export function getStorySection(title: string): PlaygroundSection {
  const prefix = title.split("/")[0];
  if (prefix === "Atoms" || prefix === "Molecules" || prefix === "Organisms") {
    return prefix;
  }
  return "Other";
}
