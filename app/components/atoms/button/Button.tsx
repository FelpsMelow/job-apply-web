import { ReactNode } from "react";
import clsx from "clsx";
import { darkPalette, lightPalette } from "@/app/theme/palette";
import { useTheme } from "@/app/hooks/useTheme";
import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "danger" | "success" | "link";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

// TODO - V1 (Variações que contemplam essa versão)
// - primary
// - secondary
// - danger
// - link

export default function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    type = "button",
    isLoading = false,
    disabled,
    ...props
}: ButtonProps) {
    const { theme } = useTheme();
    const palette = theme === "dark" ? darkPalette : lightPalette;
    
    const classes = clsx(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        className,
        { "btn--loading": isLoading }
    );

    return (
        <button
            type={type}
            className={classes}
            disabled={isLoading || disabled}
            style={{
                background: palette.button[variant].bg,
                color: palette.button[variant].text,
            }}
            {...props}
        >
            {isLoading ? <span className="spinner" /> : children}
        </button>
    );
}
