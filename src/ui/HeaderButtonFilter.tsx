import { useSearchParams } from "react-router-dom";

interface HeaderButtonFilterPropType {
  onClick?: () => void;
  filterValue:string
  filterDefaultValue:string
}
// specialties

const ButtonFilter = ({ onClick,filterValue,filterDefaultValue }: HeaderButtonFilterPropType) => {
  const [searchParams]=useSearchParams()
  const city = searchParams.get(filterValue) || filterDefaultValue;
  return (
    <button
      onClick={onClick}
      className="bg-white h-[2.5rem] text-slate-700 rounded-[6px]   pb-[5px] w-full sm:w-[10rem] border border-solid border-slate-300"
    >
      {city}
    </button>
  );
};

export default ButtonFilter;
