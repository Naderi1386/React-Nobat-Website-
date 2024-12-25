import { FaPhoneFlip } from "react-icons/fa6";

interface FavoriteTellPropType {
  phone: string;
}

const FavoriteTell = ({ phone }: FavoriteTellPropType) => {
  return (
    <div className="absolute shadow-custome4 bottom-0 right-0 w-[40px] h-[40px] transition-all duration-75 hover:text-hoverBlue-400 bg-white flex justify-center items-center rounded-[100%]">
      <a href={`tel:${phone}`}>
        <FaPhoneFlip size={20} />
      </a>
    </div>
  );
};

export default FavoriteTell;
