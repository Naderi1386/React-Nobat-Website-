import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, getFavorite, StoreType } from "../../Redux/Store";
import { addDoctor, FavoriteType, removeDoctor } from "../../Redux/Favorites";
import toast from "react-hot-toast";
interface FavoriteHeartPropType{
    doctor:FavoriteType
}

const FavoriteHeart = ({doctor}:FavoriteHeartPropType) => {
    const {id,specialty,name,phone,image}=doctor
      const favorite = useSelector<StoreType>(
        getFavorite(id)
      ) as FavoriteType;
      const dispatch = useDispatch<DispatchType>();
      const onClickHeart = () => {
        if (!favorite) {
                toast.success(
                  ` ${name} به لیست علاقه مندی شما اضافه شد`
                );

          const newFav: FavoriteType = {
            id: id,
            image: image,
            name: name,
            phone: phone,
            specialty: specialty,
          };
          dispatch(addDoctor(newFav));
        } else {
            toast.success(` ${name} از لیست علاقه مندی شما حذف شد`);
          dispatch(removeDoctor(doctor!.id));
        }
      };
  return (
    <span
      onClick={onClickHeart}
      className="cursor-pointer transition-all duration-75 text-red-500 hover:text-[#EF9A9A] absolute left-5 top-5"
    >
      <FaHeart size={28} />
    </span>
  );
};

export default FavoriteHeart;
