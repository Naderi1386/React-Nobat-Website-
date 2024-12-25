interface DoctorTurnPropType{
    onClick?:()=>void
}

const DoctorTurn = ({onClick}: DoctorTurnPropType) => {
  return (
    <button onClick={onClick} className="w-full mt-4 h-[38px] flex text-white  justify-center items-center bg-greenLink-500">
      دریافت نوبت اینترنتی{" "}
    </button>
  );
};

export default DoctorTurn;
