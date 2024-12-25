import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";

interface ProfileBoxItemPropType {
  children: ReactNode;
  to: string;
}

const ProfileBoxItem = ({ children, to }: ProfileBoxItemPropType) => {
  return (
    <>
      <Link
        to={to}
        className="flex items-center justify-between border-b border-solid border-customeGrey-400 py-3 text-[0.82rem] font-semibold transition-all duration-150 text-customeGrey-900 hover:text-hoverBlue-400"
      >
        <p>{children}</p>
        <GrFormPrevious size={30} stroke="#BDBDBD" />
      </Link>
    </>
  );
};

export default ProfileBoxItem;
