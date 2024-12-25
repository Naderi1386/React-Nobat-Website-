import { useSelector } from "react-redux"
import { getFavorites, StoreType } from "../../Redux/Store"
import { FavoriteType } from "../../Redux/Favorites"
import FavoriteItem from "./FavoriteItem"
import EmptyProfile from "../../ui/EmptyProfile"

const FavoritesList = () => {
    const favorites=useSelector<StoreType>(getFavorites) as FavoriteType[]
    if(!favorites.length) return <EmptyProfile text="پزشکی در لیست علاقه مندی های شما وجود ندارد" />;
  return (
    <ul className="max-w-[720px] mx-auto space-y-6 mb-11">
        {favorites.map((fav,index)=><FavoriteItem key={index} doctor={fav}/>)}
    </ul>
  )
}

export default FavoritesList