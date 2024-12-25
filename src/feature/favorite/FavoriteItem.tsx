import { Link, useNavigate } from "react-router-dom";
import { FavoriteType } from "../../Redux/Favorites"
import FavoriteHeart from "./FavoriteHeart";
import FavoriteTell from "./FavoriteTell";


interface FavoriteItemPropType{
    doctor:FavoriteType
}
const FavoriteItem = ({doctor}: FavoriteItemPropType) => {
    const {id,image,name,phone,specialty}=doctor
    const navigate=useNavigate()


  return (
    <li className="relative text-center w-full py-[2.8rem] flex justify-center items-center rounded-[1.375rem] shadow-custome3">
      <FavoriteHeart doctor={doctor} />
      <div>
        <div className="relative w-[120px] h-[120px]  mx-auto mb-4 cursor-pointer">
          <img
            onClick={() => navigate(`/doctor/${id}`)}
            src={image}
            alt={`doctor ${name}`}
            className="w-full h-full overflow-hidden rounded-[100%]"
          />
          <FavoriteTell phone={phone} />
        </div>
        <Link
          to={`/doctor/${id}`}
          className="transition-all duration-150 text-black text-[1.05rem] font-semibold hover:text-hoverBlue-400 block"
        >
          {name}
        </Link>
        <Link
          to={`/doctor/${id}`}
          className="transition-all duration-150 text-greenLink-400 text-[.75rem] font-semibold hover:text-hoverBlue-400 block"
        >
          {specialty} متخصص
        </Link>
      </div>
    </li>
  );
};

export default FavoriteItem