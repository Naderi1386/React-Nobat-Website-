import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonLinkPropType {
  size: "small" | "large";
  to: string;
  children: ReactNode;
}

const ButtonLink = ({ size, to, children }: ButtonLinkPropType) => {
  return (
    <Link
      className={`text-white ${
        size == "small" && "text-white/80"
      }  inline-flex justify-center items-center h-[40px] pb-[0.3rem] border border-solid  ${
        size === "large" && "border-white/60"
      } ${size == "small" && "border-white/30"}  ${
        size === "small" ? "bg-header-900" : "bg-transparent"
      }  ${size === "small" ? "w-[4rem]" : "w-[100%]"} ${
        size === "small" ? "md:w-[8rem]" : "sm:w-[100%]"
      }   rounded-[6px]`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
