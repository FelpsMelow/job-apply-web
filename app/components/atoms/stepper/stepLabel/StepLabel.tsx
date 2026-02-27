import clsx from "clsx";
import styles from "./step-label.module.scss";
import { StepStatus } from "../stepDot/StepDot";

type StepLabelProps = {
    label: string;
    status: StepStatus;
};

export function StepLabel({ label, status }: StepLabelProps) {
    return (
        <span
            className={clsx(styles["step-label"], styles[`step-label--${status}`])}
        >
            {label}
        </span>
    );
}
