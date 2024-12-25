import { ReactNode } from "react";

interface MainLinksPropType{
    children:ReactNode
}

const MainLinks = ({children}:MainLinksPropType) => {
  return (
    <div className="bg-mainLinks-300 text-center py-6 px-[2rem] lg:px-[12rem] xl:px-[16rem]">
        {children}
    </div>
  );
}

export default MainLinks