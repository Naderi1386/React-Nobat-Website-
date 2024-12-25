import { useCurrentUser } from "../feature/login/useCurrentUser";
import ButtonLink from "./ButtonLink";
const Url1 =
  "https://tehran.irannsr.org/fa/page/104366-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D9%87-%D8%A7%D8%B9%D8%B6%D8%A7.html?ctp_id=1086&id=38153";
const Url2 = "https://trustseal.enamad.ir/?id=205461&Code=qLJz8VCvTrhuNCWUixxI";

const Footer = () => {
  const {user}=useCurrentUser()
  const to = user ? "/user" : "/signup";
  return (
    <footer className="bg-header-400 py-8 px-[2rem] lg:px-[12rem] xl:px-[16rem] space-y-8">
      <div className="flex flex-col gap-6 items-center sm:flex-row sm:justify-between ">
        <div className="flex flex-col items-center gap-6 order-1 w-full">
          <ButtonLink size="large" to="/">
            عضویت پزشکان
          </ButtonLink>
          <ButtonLink size="large" to="/contact-us">
            تلفن های پشتیبانی{" "}
          </ButtonLink>
        </div>
        <div className="flex flex-col items-center gap-6 w-full">
          <ButtonLink size="large" to={to}>
            ورود{" "}
          </ButtonLink>
          <ButtonLink size="large" to="/rules">
            قوانین سایت{" "}
          </ButtonLink>
        </div>
      </div>
      <div className="flex gap-4 justify-center sm:justify-end flex-wrap">
        <a
          href={Url1}
          target="_blank"
          className="w-[6rem] sm:w-[8rem] h-[7.5rem] sm:h-[8.5rem] flex justify-center items-center bg-white rounded-md"
        >
          <img
            className=" w-[4.2rem] sm:w-[5.5rem]"
            src="https://nobat.ir/public/ui_v2_0/images/uiv2/NSR.png"
            alt=""
          />
        </a>
        <a
          href={Url2}
          target="_blank"
          className="w-[6rem] sm:w-[8rem] h-[7.5rem] sm:h-[8.5rem] flex justify-center items-center bg-white rounded-md"
        >
          <img
            className=" w-[4rem] sm:w-[5.5rem]"
            src="https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777"
            alt=""
          />
        </a>
        <div className="w-[6rem] sm:w-[8rem] h-[7.5rem] sm:h-[8.5rem] flex justify-center items-center bg-white rounded-md">
          <img
            className=" w-[4rem] sm:w-[5.5rem]"
            src="https://nobat.ir/public/ui_v2_0/images/uiv2/ecunion.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
