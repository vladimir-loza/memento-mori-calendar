import { WEEKS_PER_YEAR } from "../constants";

export const getWeeksSince = (startDate: Date): number => {
  const now = new Date();
  const diffInMs = now.getTime() - startDate.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const diffInWeeks = diffInDays / 7;
  
  return Math.floor(diffInWeeks);
};

export const getWeeksFilledForYear = (
  startDate: Date | null,
  yearNumber: number,
  weeksPerYear: number = WEEKS_PER_YEAR
): number => {
  if (!startDate) return 0;
  const totalWeeks = getWeeksSince(startDate);
  
  const weeksStart = (yearNumber - 1) * weeksPerYear;
  const weeksEnd = yearNumber * weeksPerYear;
  
  if (totalWeeks >= weeksEnd) {
    return weeksPerYear;
  }
  
  if (totalWeeks >= weeksStart) {
    return totalWeeks - weeksStart;
  }
  
  return 0;
};


export const formatDateForInput = (date: Date | null): string => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};