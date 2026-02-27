import clsx from "clsx";
import "./divider.scss";

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

export default function Divider({ orientation = "horizontal", className }: DividerProps) {
    const classes = clsx("divider", {
        "divider--horizontal": orientation === "horizontal",
        "divider--vertical": orientation === "vertical",
    }, className);

    return <div className={classes} />;
}
