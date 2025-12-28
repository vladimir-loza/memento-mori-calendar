import { EMPTY_WEEK_BG, FILLED_WEEK_BG } from "../constants";
import { cn } from "../utils/styles.utils";

type Props = {
  isFilled?: boolean;
}

export const Week = ({ isFilled = false }: Props) => {
  return (
    <div 
      className={cn(
        "size-[5px] sm:size-[6px] rounded-[1px] transition-all duration-200",
        isFilled 
          ? FILLED_WEEK_BG 
          : EMPTY_WEEK_BG
        )
      }
    />
  )
}