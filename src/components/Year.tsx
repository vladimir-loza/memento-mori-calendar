import {
  WEEKS_PER_YEAR,
  YEAR_ID_PREFIX,
  YEARS_LABEL_INTERVAL,
} from "../constants";
import { Week, YearLabel } from ".";
import { cn } from "../utils/styles.utils";

type Props = {
  yearNumber: number;
  isYearFilled?: boolean;
  weeksFilled?: number;
};

export const Year = ({
  yearNumber,
  isYearFilled = false,
  weeksFilled = 0,
}: Props) => {
  const weeksToFill = isYearFilled ? WEEKS_PER_YEAR : weeksFilled;
  const isLastYearOfBlock = yearNumber % YEARS_LABEL_INTERVAL === 0;

  return (
    <div
      className={cn(
        "flex gap-0.5 items-center relative",
        isLastYearOfBlock ? "mb-2" : "mb-0.5"
      )}
    >
      {isLastYearOfBlock && <YearLabel yearNumber={yearNumber} />}

      <div className="flex gap-0.5 items-center">
        {Array.from({ length: WEEKS_PER_YEAR }).map((_, index) => (
          <Week
            key={`${YEAR_ID_PREFIX}-${yearNumber}-week-${index}`}
            isFilled={index < weeksToFill}
          />
        ))}
      </div>
    </div>
  );
};
