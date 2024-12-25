import { Link } from "react-router-dom";

const HeaderProfile = () => {
  return (
    <div className="px-[1.5rem] lg:px-[12rem] xl:px-[16rem] bg-headerProfile-500 py-2">
      <div className="text-[0.85rem] text-white  flex items-center ">
        <Link to={"/user"} className="inline-block  px-3 line  ">
          (پروفایل)
        </Link>
        <Link to={"/favorites"} className="inline-block line px-3">
          لیست من
        </Link>
        <Link to={"/turns"} className="inline-block px-3">
          نوبت های من
        </Link>
      </div>
    </div>
  );
};

export default HeaderProfile;
