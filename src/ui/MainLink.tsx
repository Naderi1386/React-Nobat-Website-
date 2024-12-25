import { ReactNode } from "react";

interface MainLinkPropType {
  children: ReactNode;
  to: string;
}

const MainLink = ({ children, to }: MainLinkPropType) => {
  return (
    <a
      className="text-mainLinkColor-500 rounded-[6px] border-mainLinkColor-500/50 bg-white inline-flex justify-center items-center h-[40px] pb-[0.3rem] border border-solid w-full sm:w-[50%]"
      href={to}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default MainLink;
