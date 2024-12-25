import { useNavigate } from "react-router-dom";
import { DoctorType } from "../../services/apiDoctors";
import Stars from "../../ui/Stars";

interface DoctorsItemPropType {
  doctor: DoctorType;
}

const DoctorsItems = ({ doctor }: DoctorsItemPropType) => {
  const navigate = useNavigate();
  const { image, name, address, specialty, accepting_patients, rating, id } =
    doctor;
  const shortAddress = address
    .split(" ")
    .slice(1, 3)
    .join(" ")
    .replace("،", " ");
    
    

  return (
    <li
      onClick={() => navigate(`/doctor/${id}`)}
      className="px-4 pt-4 pb-8 cursor-pointer rounded-[4px]  space-y-4 w-full  custome1355:w-[49%] h-[177.6px]    border border-solid border-stone-500/15"
    >
      <div className="flex justify-between ">
        <div className="self-start">
          <h2 className="font-bold text-[1rem] sm:text-[1.25rem] mb-3 flex gap-1">
            <img
              className="w-[1.2rem] h-[1.2rem] order-1 self-end mb-[.2rem]"
              src="https://nobat.ir/public/ui_v2_0/images/uiv2/verified-icon.png"
              alt=""
            />
            {name}
          </h2>
          <h2 className="text-[1rem] sm:text-base text-doctor-800  mb-5">
            متخصص {specialty}{" "}
          </h2>
          {accepting_patients && (
            <span className="text-xs text-stone-400">نوبت دهی</span>
          )}
        </div>
        <img
          src={image}
          alt={`Doctor ${name}.jpg`}
          className="rounded-[4px] border border-solid border-stone-500/20 w-[5rem] h-[6rem]"
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[0.85rem] text-address-500">{shortAddress}</span>
        <span className="flex items-center gap-2">
          <span className="text-address-500 self-end">{rating}</span>{" "}
          <Stars rating={rating} />
        </span>
      </div>
    </li>
  );
};

export default DoctorsItems;
