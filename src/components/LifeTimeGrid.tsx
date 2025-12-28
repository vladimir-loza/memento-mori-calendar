import { useState } from "react";
import { BirthInput, Year } from ".";
import {
  YEAR_ID_PREFIX,
  YEARS_TO_RENDER,
  WEEKS_PER_YEAR,
  BIRTH_DATE_KEY,
} from "../constants";
import { getWeeksFilledForYear } from "../utils/dates.utils";
import { useLocalStorage } from "../hooks";

const getInitialBirthDate = (): Date | null => {
  try {
    const item = localStorage.getItem(BIRTH_DATE_KEY);
    if (item) {
      const birthDate = JSON.parse(item);
      return new Date(birthDate);
    }
  } catch {
    return null;
  }
  return null;
};

export const LifeTimeGrid = () => {
  const [currentBirthDate, setcurrentBirthDate] = useState<Date | null>(getInitialBirthDate);
  const { setItemByKey } = useLocalStorage();

  const handleBirthDateChange = (date: Date | null) => {
    setcurrentBirthDate(date);
    setItemByKey(BIRTH_DATE_KEY, date);
  };

  return (
    <div className="flex flex-col mx-auto w-full items-center">
      <BirthInput
        onChange={handleBirthDateChange}
        value={currentBirthDate}
      />
      <div className="relative w-full flex justify-center">
        <div className="relative">
          {Array.from({ length: YEARS_TO_RENDER }).map((_, index) => {
            const yearNumber = index + 1;
            const weeksFilled = getWeeksFilledForYear(
              currentBirthDate,
              yearNumber,
              WEEKS_PER_YEAR
            );

            return (
              <Year
                key={`${YEAR_ID_PREFIX}-${index}`}
                yearNumber={yearNumber}
                weeksFilled={weeksFilled}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
