import { ReactNode } from "react";

interface MainButtonPropType {
  children: ReactNode;
  onClick?: () => void;
}
const MainButton = ({ children, onClick }: MainButtonPropType) => {
  return (
    <button
      className="text-mainLinkColor-500 rounded-[6px] border-mainLinkColor-500/50 bg-white inline-flex justify-center items-center pb-3 pt-[0.2rem] border border-solid w-full sm:w-[50%]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
