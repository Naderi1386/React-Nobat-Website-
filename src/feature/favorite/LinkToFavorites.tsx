import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LinkToFavorites = () => {
  return (
    <Link
      to={"/favorites"}
      className="flex rounded-[1.1rem] shadow-custome1 py-[0.60rem] flex-col items-center w-[50%]"
    >
      <span className="w-[26px] h-[26px]   flex justify-center items-center">
        <FaHeart fill="red" size={20} />
      </span>
      <span className="font-semibold text-[.75rem] sm:text-base">
        لیست مورد علاقه من
      </span>
    </Link>
  );
}

export default LinkToFavorites