import { RxCross2 } from "react-icons/rx";
interface SearchInputPropType {
  onClick: () => void;
  value:string
  onChange:(v:string)=>void
}

const SearchInput = ({ onClick,value,onChange }: SearchInputPropType) => {
  return (
    <div className="flex items-center gap-3 w-full">
      <RxCross2
        onClick={onClick}
        className="cursor-pointer order-1"
        size={20}
        style={{ color: "gray" }}
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="جستجوی نام پزشک و تخصص..."
        className="input"
      />
    </div>
  );
};

export default SearchInput;
