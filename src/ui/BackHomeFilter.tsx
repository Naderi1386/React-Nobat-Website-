import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface BackHomeFilterPropType{
    to:string
    children:ReactNode
}

const BackHomeFilter = ({to,children}:BackHomeFilterPropType) => {
  return (
    <Link to={to} className="text-mainLinkColor-500 rounded-[6px] border-mainLinkColor-500/50 bg-white inline-flex justify-center items-center pb-[.3rem] pt-1 h-[40px] border border-solid w-[100%] sm:w-[50%] ">{children}</Link>
  );
};

export default BackHomeFilter;
