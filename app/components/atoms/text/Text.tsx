import React, { HTMLAttributes, ReactNode } from "react";
import { lightPalette, darkPalette } from "@/app/theme/palette";
import { useTheme } from "@/app/hooks/useTheme";
import clsx from "clsx";
import "./text.scss";

interface TextProps extends HTMLAttributes<HTMLElement>{
    children: ReactNode;
    as?: "span" | "p" | "div" | "label" | "strong" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    weight?: "regular" | "medium" | "bold";
    color?: "primary" | "secondary" | "disabled" | "inverse";
    align?: "left" | "center" | "right";
    mode?: "nowrap" | "truncate" | "multiline";
    className?: string;
    style?: React.CSSProperties;
}

export default function Text({
    children,
    as = "span",
    size = "md",
    weight = "regular",
    color = "primary",
    align = "left",
    mode = 'multiline',
    className,
    style,
    ...props
}: TextProps) {
    const { theme } = useTheme();
    const palette = theme === "dark" ? darkPalette : lightPalette;

    const Tag = as;

    const classes = clsx(
        "text",
        `text--${size}`,
        `text--${weight}`,
        `text--${color}`,
        `text--${align}`,
        {
            "text--nowrap": mode === "nowrap",
            "text--truncate": mode === "truncate",
            "text--multiline": mode === "multiline",
        },
        className
    );

    return (
        <Tag
            className={classes}
            style={{
                color: palette.text[color],
                textAlign: align,
                ...style,
            }}
            {...props}
        >
            {children}
        </Tag>
    );
}