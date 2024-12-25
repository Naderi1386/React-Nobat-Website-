import { useSelector } from "react-redux";
import Modal from "../../ui/Modal";
import LogoutModal from "../logout/LogoutModal";
import ProfileBoxItem from "./ProfileBoxItem";
import { getFavorites, getTurns, StoreType } from "../../Redux/Store";
import { FavoriteType } from "../../Redux/Favorites";
import { useLocation } from "react-router-dom";
import { TurnType } from "../../Redux/Turn";
const ProfileBox = () => {
  const favorites=useSelector<StoreType>(getFavorites) as FavoriteType[]
  const turns=useSelector<StoreType>(getTurns) as TurnType[]
  const {pathname}=useLocation()
  const isFavorite=favorites.length>0 && pathname!='/favorites'
  const isTurn=turns.length>0 && pathname!='/turns'
  return (
    <div className="max-w-[720px] pb-[2rem] px-[1.8rem] mx-auto rounded-[0.625rem] border border-solid border-customeGreyBorder-300">
      <div className="mb-[.5rem]">
        {isTurn && (
          <ProfileBoxItem to="/turns">لیست نوبت ها</ProfileBoxItem>
        )}
        {isFavorite && (
          <ProfileBoxItem to="/favorites">پزشکان مورد علاقه</ProfileBoxItem>
        )}
        <ProfileBoxItem to="/">لیست پزشکان</ProfileBoxItem>
      </div>
      <Modal>
        <Modal.Open opens="logout">
          <span
            role="button"
            className="text-[0.82rem] cursor-pointer font-semibold text-customeGrey-900"
          >
            خروج از حساب
          </span>
        </Modal.Open>
        <Modal.Window name="logout">
          <LogoutModal />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default ProfileBox;
