import { formatDateForInput } from "../utils";

type Props = {
  onChange: (date: Date | null) => void;
  value: Date | null;
}

export const BirthInput = ({ onChange, value }: Props) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value;
    if (dateString) {
      const newDate = new Date(dateString);
      onChange(newDate);
    } else {
      onChange(null);
    }
  };

  const handleReset = () => {
    onChange(null);
  };

  return (
    <div className="mb-4 flex items-center gap-2 relative">
      <input
        type="date"
        value={formatDateForInput(value)}
        onChange={handleChange}
        className="font-display font-thin tracking-wide bg-transparent border-none border-b border-white/30 text-white py-2 w-full text-base outline-none transition-[border-color] duration-200 focus:border-white/70 birth-date-input"
      />
      <button
        type="button"
        onClick={handleReset}
        className="bg-transparent border-none text-white cursor-pointer p-2 flex items-center justify-center opacity-70 transition-opacity duration-200 shrink-0 hover:opacity-100 focus:outline-none focus:opacity-100"
        aria-label="Reiniciar fecha"
      >
        <img 
          src="/close-x-svgrepo-com.svg" 
          alt="Reiniciar fecha"
          className="w-5 h-5"
          style={{ filter: 'invert(1)' }}
        />
      </button>
    </div>
  )
}