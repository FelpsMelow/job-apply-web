import Text from "../text/Text";
import "./divider-with-text.scss";

interface DividerWithTextProps {
    text?: string;
}

export default function DividerWithText({ text = "Ou entre com" }: DividerWithTextProps) {
    return (
        <div className="divider-with-text">
            <span className="divider-line" />
                <Text size="sm" color="disabled" align="center">
                    {text}
                </Text>
            <span className="divider-line" />
        </div>
    );
}
