type Props = {
  yearNumber: number;
}

export const YearLabel = ({ yearNumber }: Props) => {
  return (
    <span className="text-sm font-display font-thin tracking-wide text-white absolute leading-none -left-16 top-1/2 -translate-y-1/2 w-14 text-right pointer-events-none">
      {yearNumber}
    </span>
  )
}