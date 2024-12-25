interface TurnDayPropType {
  day: string;
  onClick: () => void;
  isSelected: boolean;
}

const TurnDay = ({ day, onClick, isSelected }: TurnDayPropType) => {
  const color = isSelected ? "bg-greenLink-500 text-white" : "bg-[#F5F5F5] text-black border border-solid border-stone-200";
  
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer justify-center items-center rounded-[4px] ${color} p-2 text-sm `}
    >
      <span>{day}</span>
    </div>
  );
};

export default TurnDay;
