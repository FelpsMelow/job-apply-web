export type Theme = "light" | "dark";

export interface ButtonVariant {
    bg: string;
    text: string;
}

export interface ButtonColors {
    primary: ButtonVariant;
    secondary: ButtonVariant;
    danger: ButtonVariant;
    success: ButtonVariant;
    link: ButtonVariant;
}

export interface InputStateColors {
    bg: string;
    text: string;
    border: string;
    placeholder: string;
    error: string;
}

export interface GrayscaleColors {
    white: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    black: string;
}

export interface SystemColors {
    info: string;
    warning: string;
    error: string;
    success: string;
}

export interface TextColors {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
}

export interface BackgroundColors {
    default: string;
    muted: string;
    elevated: string;
    overlay: string;
}

export interface BorderColors {
    default: string;
    focus: string;
    error: string;
}

export interface Shadow {
    sm: string;
    md: string;
    lg: string;
}

export interface ProgressBarColors {
    taskFill: string,
    stepFill: string,
    track: string
}

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
