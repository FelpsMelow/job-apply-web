import clsx from "clsx";
import styles from "./step-dot.module.scss";

export type StepStatus = "pending" | "active" | "done" | "error";

type StepDotProps = {
    index: number;
    status: StepStatus;
};

export function StepDot({ index, status }: StepDotProps) {
    const content = status === "done" ? "✓" : index + 1;

    return (
        <span
            aria-hidden="true"
            className={clsx(styles["step-dot"], styles[`step-dot--${status}`])}
        >
            {content}
        </span>
    );
}
