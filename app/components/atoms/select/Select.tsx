import { useTheme } from "@/app/hooks/useTheme";
import { darkPalette, lightPalette } from "@/app/theme/palette";
import clsx from "clsx";
import "./select.scss";

interface Option {
    label: string;
    value: string | boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
    variant?: "primary" | "link" | "secondary";
    sizeSelect?: "sm" | "md" | "lg";
    className?: string;
}

export default function Select({
    options,
    variant = "primary",
    sizeSelect = "md",
    className,
    ...props
}: SelectProps) {
    const { theme } = useTheme();
    const palette = theme === "dark" ? darkPalette : lightPalette;

    const classes = clsx("select", `select--${variant}`, `select--${sizeSelect}`, className);

    return (
        <select
            className={classes}
            style={
                variant === "primary" || "secondary"
                ? {
                    background: palette.button[variant].bg,
                    color: palette.button[variant].text,
                }
                : {
                    background: "transparent",
                    color: palette.text.primary,
                    border: "none",
                    appearance: "none",
                }
            }
            {...props}
        >
            {options.map(({ label, value }) => (
                <option key={label} value={`${value}`}>
                    {label}
                </option>
            ))}
        </select>
    );
}
