import type { PropsWithChildren } from "react";
import { cn } from "../utils/styles.utils";

const ACTIVE_CLASS = "bg-white text-[#111317]";
const INACTIVE_CLASS = "bg-white/20 text-white hover:bg-white/30";

type Props = PropsWithChildren & {
  onChange: (language: string) => void;
  isActive?: boolean;
  languageKey: string;
  ariaLabel: string;
};

export const ButtonLangSwitch = ({
  onChange,
  isActive,
  languageKey,
  ariaLabel,
  children,
}: Props) => {
  return (
    <button
      onClick={() => onChange(languageKey)}
      className={cn(
        "size-6 sm:size-10 text-xs sm:text-sm rounded-full flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer opacity-70 hover:opacity-100",
        isActive ? ACTIVE_CLASS : INACTIVE_CLASS
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
