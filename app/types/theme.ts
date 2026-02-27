export type Theme = "light" | "dark";

export type ButtonColors = Record<"primary" | "secondary" | "danger" | "success" | "link", { bg: string; text: string }>;
export type ProgressBarColors = { taskFill: string; stepFill: string; track: string };
export type InputStateColors = { bg: string; text: string; border: string; placeholder: string; error: string };
export type GrayscaleColors = Record<string, string>;
export type SystemColors = { info: string; warning: string; error: string; success: string };
export type TextColors = { primary: string; secondary: string; disabled: string; inverse: string };
export type BackgroundColors = { default: string; muted: string; elevated: string; overlay: string };
export type BorderColors = { default: string; focus: string; error: string };
export type Shadow = { sm: string; md: string; lg: string };

export interface Palette {
  button: ButtonColors;
  progressBar: ProgressBarColors;
  input: InputStateColors;
  grayscale: GrayscaleColors;
  system: SystemColors;
  text: TextColors;
  background: BackgroundColors;
  border: BorderColors;
  shadow: Shadow;
}
