import ListTitle from "../../ui/ListTitle"
import FavoritesList from "./FavoritesList";

const FavoritesBox = () => {
  return (
    <div className="px-8">
      <ListTitle text="لیست مورد علاقه من"  />
      <FavoritesList/>
    </div>
  );
}

export default FavoritesBox