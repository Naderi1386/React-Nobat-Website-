import { useState } from "react";
import { IoMdPhonePortrait } from "react-icons/io";

interface DoctorTellPropType {
  phone: string;
}

const DoctorTell = ({ phone }: DoctorTellPropType) => {
  const phoneNumber = phone.split("").reverse().join(" ");
  const [showTell, setShowTell] = useState(false);
  const arrayTell = phone.split("");
  const shortTell = arrayTell
    .map((tell, index) => (index + 1 >= 8 && index + 1 <= 11 ? "*" : tell))
    .reverse()
    .join()
    .replace(/,/g, " ");
  const onShow = () => {
    if (!showTell) setShowTell(true);
  };

  return (
    <div className="w-[100%] flex flex-col gap-3 items-end ">
      <div className="flex items-center gap-3 pl-4">
        {showTell ? (
          <span className="font-bold text-[1.2rem] text-black">
            {phoneNumber}
          </span>
        ) : (
          <span className="font-bold text-[1.2rem] text-black">
            {shortTell}
          </span>
        )}
        <IoMdPhonePortrait
          onClick={onShow}
          className={`${!showTell && "cursor-pointer"}`}
        />
      </div>
      {!showTell && (
        <button
          className="w-full h-[38px] flex  justify-center items-center bg-buttonGrey-500"
          onClick={onShow}
        >
          نمایش کامل تلفن
        </button>
      )}
    </div>
  );
};

export default DoctorTell;
