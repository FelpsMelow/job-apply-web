import "./toggle.scss";

type ToggleProps = {
    checked: boolean;
    onChange: (next: boolean) => void;
    disabled?: boolean;
    ariaLabel?: string;
};

export default function Toggle({ checked, onChange, disabled, ariaLabel = "Alternar" }: ToggleProps) {
    return (
        <button
            type="button"
            className={`toggle ${checked ? "toggle-checked" : ""} ${disabled ? "toggle-disabled" : ""}`}
            onClick={() => !disabled && onChange(!checked)}
            aria-pressed={checked}
            aria-label={ariaLabel}
            disabled={disabled}
        >
            <span className="toggle-thumb">
                <span className="toggle-check">✓</span>
            </span>
        </button>
    );
}
