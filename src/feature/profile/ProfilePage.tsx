import { useSelector } from "react-redux";
import HeaderProfile from "./HeaderProfile";
import LinkToQuestions from "./LinkToQuestions";
import ProfileBox from "./ProfileBox";
import { getFavorites, StoreType } from "../../Redux/Store";
import { FavoriteType } from "../../Redux/Favorites";
import LinkToFavorites from "../favorite/LinkToFavorites";

const ProfilePage = () => {
  const favorites = useSelector<StoreType>(getFavorites) as FavoriteType[];
  const isFavorites = favorites.length > 0;
  return (
    <div>
      <HeaderProfile />
      <div className="px-8">
        <div
          className={` mb-10 max-w-[720px] mx-auto flex gap-8  ${
            isFavorites ? "justify-between" : "justify-center"
          }`}
        >
          {isFavorites && <LinkToFavorites />}
          <LinkToQuestions />
        </div>
      </div>
      <div className="px-8">
        <ProfileBox />
      </div>
    </div>
  );
};

export default ProfilePage;
