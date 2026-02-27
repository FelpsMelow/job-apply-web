import React from "react";
import clsx from "clsx";
import { useTheme } from "@/app/hooks/useTheme";
import { lightPalette, darkPalette } from "@/app/theme/palette";
import "./input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({
    label,
    error,
    className,
    disabled,
    ...props
}: InputProps) {
    const { theme } = useTheme();
    const palette = theme === "dark" ? darkPalette : lightPalette;

    const classes = clsx(
        "input",
        {
            "input--error": !!error,
            "input--disabled": disabled,
        },
        className
    );

    return (
        <div
            className="input-wrapper">
            {label && <label className="input-label">{label}</label>}
            <input
                className={classes}
                disabled={disabled}
                style={{
                    backgroundColor: palette.input.bg,
                    color: palette.input.text,
                    borderColor: error ? palette.input.error : palette.input.border,
                }}
                placeholder={props.placeholder}
                {...props}
            />
            {error && <span className="input-error">{error}</span>}
        </div>
    );
}
