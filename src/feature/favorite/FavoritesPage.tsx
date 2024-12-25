import HeaderProfile from "../profile/HeaderProfile"
import ProfileBox from "../profile/ProfileBox";
import FavoritesBox from "./FavoritesBox";

const FavoritesPage = () => {
  
  return (
    <div className="pb-24">
      <HeaderProfile />
      <FavoritesBox/>
      <div className="px-8">
        <ProfileBox />
      </div>
    </div>
  );
}

export default FavoritesPage