import { Palette } from "../types/theme";
import { button } from "./colors/button";
import { grayscale } from "./colors/grayscale";
import { system } from "./colors/system";
import { background } from "./colors/background";
import { border } from "./colors/border";
import { shadow } from "./colors/shadow";
import { text } from "./colors/text";
import { input } from "./colors/input";
import { progressBar } from './colors/progressBar';


export const lightPalette: Palette = {
    button,
    progressBar,
    input,
    grayscale,
    system,
    text,
    background,
    border,
    shadow,
};

// TODO - Criar as variações de tema
export const darkPalette: Palette = {
    button,
    progressBar,
    input,
    grayscale,
    system,
    text,
    background,
    border,
    shadow,
};