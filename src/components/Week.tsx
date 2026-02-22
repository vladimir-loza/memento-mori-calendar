import { EMPTY_WEEK_BG, FILLED_WEEK_BG } from "../constants";
import { cn } from "../utils/styles.utils";

type Props = {
  isFilled?: boolean;
}

export const Week = ({ isFilled = false }: Props) => {
  return (
    <div 
      className={cn(
        "size-1.25 sm:size-1.5 rounded-[1px]",
        isFilled 
          ? FILLED_WEEK_BG 
          : EMPTY_WEEK_BG
        )
      }
    />
  )
}