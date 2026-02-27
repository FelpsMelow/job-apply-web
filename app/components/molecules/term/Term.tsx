import { useTheme } from "@/app/hooks/useTheme";
import Input from "../../atoms/input/Input";
import { darkPalette, lightPalette } from "@/app/theme/palette";
import { hasDatePassed } from "@/app/utils/date/isDateAfter";
import "./term.scss";

interface TermProps {
  dateSchedule: string;
}

export default function Term({ dateSchedule }: TermProps) {
  const { theme } = useTheme();
  const palette = theme === "dark" ? darkPalette : lightPalette;

  const { passed, daysRemaining } = hasDatePassed(dateSchedule);

  let backgroundColor = "";
  if (passed) {
    backgroundColor = palette.system.error;
  } else if (daysRemaining <= 7) {
    backgroundColor = palette.system.warning;
  } else {
    backgroundColor = palette.system.success;
  }

  return (
    <div className="term-container">
      <label>Prazo</label>
      <Input
        value={dateSchedule}
        className="term-container-input"
        disabled
        size={6}
        style={{ background: backgroundColor }}
      />
    </div>
  );
}
