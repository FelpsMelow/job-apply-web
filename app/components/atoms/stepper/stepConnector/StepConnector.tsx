import clsx from "clsx";
import styles from "./step-connector.module.scss";

type StepConnectorProps = {
    done?: boolean;
};

export function StepConnector({ done }: StepConnectorProps) {
    return (
        <span
            aria-hidden="true"
            className={clsx(styles["step-connector"], done && styles["step-connector--done"])}
        />
    );
}
