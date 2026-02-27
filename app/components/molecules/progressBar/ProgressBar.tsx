import { useTheme } from "@/app/hooks/useTheme";
import { useEffect, useState } from "react";
import { darkPalette, lightPalette } from "@/app/theme/palette";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import "./progress-bar.scss";

interface ProgressBarProps {
    percentage: number;
    variant?: "task" | "step";
    className?: string;
}

export default function ProgressBar({
    percentage,
    variant = "task",
}: ProgressBarProps) {
    const { theme } = useTheme();
    const palette = theme === "dark" ? darkPalette : lightPalette;
    const classes = clsx("progress-bar", `progress-bar--${variant}`);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(percentage);
        }, 500);
        return () => clearTimeout(timeout);
    }, [percentage]);

    return (
    <div className="container-progress-bar">
        {
            variant == 'task' && <Text weight="medium" mode="nowrap">{`${percentage} %`}</Text>
        }
        <div
            className={classes}
            style={{
                background: palette.progressBar.track,
            }}
        >
            <div
                className="progress-bar-fill"
                style={{
                    background: variant == 'task' ? palette.progressBar.taskFill : palette.progressBar.stepFill,
                    width: `${progress}%`,
                }}
            ></div>
        </div>
        {
            variant ==  'step' && <Text weight="medium" mode="nowrap">{`${percentage} %`}</Text>
        }
    </div>
    );
}
