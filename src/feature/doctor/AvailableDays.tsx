import { WorkingHoursType } from "../../services/apiDoctors";

interface AvailableDaysPropType {
  working_hours: WorkingHoursType[];
}
const AvailableDays = ({ working_hours }: AvailableDaysPropType) => {
  return (
    <ul className="flex  justify-between sm:justify-center items-center md:justify-start flex-wrap gap-2 sm:gap-8 md:gap-6">
      {working_hours.map((day, index) => (
        <li
          key={index}
          className="w-[85px]  rounded-[7px] border-daysColor-400 border border-solid  text-sm text-daysColor-400 bg-daysColor-500 h-[89px] text-center pt-[0.8rem]"
        >
          <p>{day.day}</p>
          <div className="flex flex-col">
            <span className=" block text-[0.65rem] ">
              {day.time_slots.at(0)?.from} تا {day.time_slots.at(0)?.to}
            </span>
            <span className=" block text-[0.65rem] ">
              {day.time_slots.at(1)?.from} تا {day.time_slots.at(1)?.to}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AvailableDays;
