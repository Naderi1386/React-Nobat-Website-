import AvailableHours from "../feature/contact/AvailableHours";
import CompanyAddress from "../feature/contact/CompanyAddress";
import TellBox from "../feature/contact/TellBox";
import HeaderNobatImg from "../ui/HeaderNobatImg";
import MainLinks from "../ui/MainLinks";


const Contact = () => {
  return (
    <>
      <div className="py-4  px-[2rem] lg:px-[12rem] xl:px-[16rem]">
        <div className="flex flex-col mb-[5rem] lg:flex-row gap-10 items-center justify-center lg:justify-between">
          <AvailableHours />
          <HeaderNobatImg/>
        </div>
        <TellBox />
      </div>
      <div className="px-[1rem] md:px-[2rem] lg:px-[12rem] xl:px-[16rem]">
        <CompanyAddress />
      </div>
      <MainLinks>
        <div></div>
      </MainLinks>
    </>
  );
}

export default Contact