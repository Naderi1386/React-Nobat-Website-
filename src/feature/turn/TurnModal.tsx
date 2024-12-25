import { IoMdClose } from "react-icons/io";
import { DoctorType } from "../../services/apiDoctors";
import { persianLeftDays } from "../../utils/helper";
import TurnDay from "./TurnDay";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../Redux/Store";
import { addTurn, TurnType } from "../../Redux/Turn";
import toast from "react-hot-toast";

interface TurnModalPropType {
  doctor: DoctorType;
  onClose?: () => void;
}

const TurnModal = ({ doctor, onClose }: TurnModalPropType) => {
  const dispatch = useDispatch<DispatchType>();
  const { working_hours } = doctor;
  const days = working_hours.map((w) => w.day);
  const leftDays = persianLeftDays(days) as string[];
  const [day, setDay] = useState(() => {
    return leftDays.at(0) as string;
  });
  const [dayTime, setDayTime] = useState("صبح");
  const hours = working_hours.filter((w) => w.day === day).at(0)?.time_slots;
  const filterHours = dayTime === "صبح" ? hours?.at(0) : hours?.at(1);
  const min = filterHours?.from as string;
  const max = filterHours?.to as string;
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(min);
  }, [min]);
  const onSubmit = () => {
    const newTurn: TurnType = {
      doctor,
      isFinished: false,
      time,
      day,
    };
    
    dispatch(addTurn(newTurn));
    toast.success("نوبت شما با موفقیت در سامانه ثبت شد");
    onClose?.();
  };

  return (
    <div className="fixed inset-0  backdrop-brightness-50 backdrop-blur-sm z-[10000] px-8">
      <div className="max-w-[32rem] p-3 bg-white rounded-[4px] mx-auto mt-16 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="flex justify-center md:justify-start">
            <span onClick={onClose} className="cursor-pointer">
              <IoMdClose size={24} />
            </span>
          </div>
          <h3 className="mt-3 mb-4 text-sm text-center">
            روز های در دسترس در این هفته
          </h3>
          <div className="flex items-center gap-6 justify-center mt-2 flex-wrap mb-7">
            {leftDays.map((d, index) => (
              <TurnDay
                day={d}
                key={index}
                isSelected={d === day}
                onClick={() => setDay(d)}
              />
            ))}
          </div>
          <h3 className="mt-3 mb-4 text-sm text-center">
            بازه زمانی مورد نظر خود را انتخاب کنید
          </h3>
          <div className="flex items-center gap-6 justify-center mt-2 flex-wrap mb-7">
            <TurnDay
              day={"صبح"}
              isSelected={dayTime === "صبح"}
              onClick={() => setDayTime("صبح")}
            />
            <TurnDay
              day={"عصر"}
              isSelected={dayTime === "عصر"}
              onClick={() => setDayTime("عصر")}
            />
          </div>

          <div className="flex justify-center">
            <input
              className="border border-solid rounded-[4px] border-stone-200 py-2 px-3 outline-none focus:ring-1 focus:ring-stone-300"
              type="time"
              min={min}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              max={max}
              placeholder="ساعت مورد نظر را انتخاب کنید"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-[60px] h-[40px] rounded-[4px] bg-greenLink-500 text-white flex justify-center items-center mx-auto"
          >
            تایید
          </button>
        </form>
      </div>
    </div>
  );
};

export default TurnModal;
