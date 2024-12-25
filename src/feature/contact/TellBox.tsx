import { FaPhoneVolume } from "react-icons/fa6";

const TellBox = () => {
  return (
    <div className="max-w-[500px] mx-auto bg-grayContact-400 rounded-[0.25rem] mb-8 p-[1rem] md:py-[1.4rem] md:px-[3rem]">
      <p className="mb-6 leading-[2] text-[0.9rem] md:text-base" style={{ wordSpacing: "3px" }}>
        <span className="font-semibold">پزشکان و منشیان </span>عزیز از طریق
        شماره تماس های زیر می توانند با پشتیبانی نوبت دات آی آر در ارتباط باشند:
      </p>
      <div className="flex flex-col gap-10 items-end ">
        <div className="flex items-center gap-3">
          <span className="text-[1rem] md:text-[1.5rem] tracking-[2px]">
            ۰۲۱-۹۲۰۰۰۰۲۱
          </span>
          <FaPhoneVolume className="w-[1.8rem] h-[1.2rem] md:w-[2.2rem] md:h-[1.5rem]" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[1rem] md:text-[1.5rem] tracking-[2px]">
            ۰۲۱-۹۱۰۱۰۰۰۲
          </span>
          <FaPhoneVolume className="w-[1.8rem] h-[1.2rem] md:w-[2.2rem] md:h-[1.5rem] " />
        </div>
      </div>
    </div>
  );
};

export default TellBox;
