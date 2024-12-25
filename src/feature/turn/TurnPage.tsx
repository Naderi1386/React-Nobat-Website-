import { useSelector } from "react-redux";
import ListTitle from "../../ui/ListTitle";
import HeaderProfile from "../profile/HeaderProfile";
import { getTurns, StoreType } from "../../Redux/Store";
import { TurnType } from "../../Redux/Turn";
import ProfileBox from "../profile/ProfileBox";
import TurnsList from "./TurnsList";

const TurnPage = () => {
    const turns=useSelector<StoreType>(getTurns) as TurnType[]
  return (
    <div className="pb-24">
      <HeaderProfile />
      <div className="px-8">
        <ListTitle
          text="
نوبت های من"
        />
        <TurnsList turns={turns} />
      </div>
      <div className="px-8">
        <ProfileBox />
      </div>
    </div>
  );
};

export default TurnPage;
