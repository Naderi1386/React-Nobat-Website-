import { editTurn, removeTurn, TurnType } from "../../Redux/Turn";
import { useNavigate } from "react-router-dom";
import { dayNumber } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../Redux/Store";
import TurnFinished from "./TurnFinished";
import { useEffect } from "react";

interface TurnItemPropType {
  turn: TurnType;
  index: number;
}

const TurnItem = ({ turn, index }: TurnItemPropType) => {
  const { doctor, time, day, isFinished } = turn;

  const { name, image, specialty, id } = doctor;
  const dispatch = useDispatch<DispatchType>();
  const navigate = useNavigate();
  const turnHourse = Number(time.split(":").at(0));
  const turnMinute = Number(time.split(":").at(1));
  const now = new Date();
  const dayNum = now.getDay();
  const turnNum = Number(dayNumber(day));
  const hours = now.getHours();
  const minute = now.getMinutes();
  
  

  useEffect(() => {
    if (!isFinished) {
      if (dayNum > turnNum) {
        dispatch(editTurn(index));
      } else if (dayNum === turnNum) {
        if (hours > turnHourse) {
          dispatch(editTurn(index));
        } else if (hours === turnHourse && minute > turnMinute) {
          dispatch(editTurn(index));
        }
      }
    }
  }, [
    isFinished,
    dayNum,
    dispatch,
    index,
    turnNum,
    hours,
    minute,
    turnHourse,
    turnMinute,
  ]);

  return (
    <li className="py-4 border-b relative border-solid border-stone-200 flex gap-3">
      {isFinished && <TurnFinished />}
      <div>
        <img
          src={image}
          alt={`${name}.img`}
          className={`w-[70px] h-[75px]  border border-solid border-stone-500/20 rounded-[4px] ${
            isFinished && "grayscale"
          } `}
        />
      </div>
      <div className="self-end grow">
        <h2
          onClick={() => navigate(`/doctor/${id}`)}
          className="font-bold text-[1rem] sm:text-[1rem] mb-1 flex gap-2 transition-all duration-75 cursor-pointer hover:text-hoverBlue-400"
        >
          {name}
        </h2>
        <h2 className="text-[0.7rem] sm:text-sm text-doctor-800">
          متخصص {specialty}{" "}
        </h2>
        {isFinished ? (
          <div className="flex justify-end  text-[.65rem] sm:text-[.73rem]">
            <button
              onClick={() => dispatch(removeTurn(index))}
              className="bg-header-400 text-white rounded-[4px] py-1 px-2"
            >
              حذف
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center text-[.65rem] sm:text-[.73rem] text-[#607D8B]">
            <span>{day}</span>
            <span>{time}</span>
          </div>
        )}
      </div>
    </li>
  );
};

export default TurnItem;
