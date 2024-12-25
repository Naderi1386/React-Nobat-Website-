import { TurnType } from "../../Redux/Turn"
import EmptyProfile from "../../ui/EmptyProfile";
import TurnItem from "./TurnItem";

interface TurnsListPropType{
    turns:TurnType[]
}

const TurnsList = ({turns}:TurnsListPropType) => {
        if (turns.length === 0)
          return <EmptyProfile text="نوبتی در سامانه ثبت نکرده اید" />;

  return (
    <ul className="max-w-[720px] mx-auto mb-8">
      {turns.map((turn,index) => (
        <TurnItem key={index} turn={turn} index={index} />
      ))}
    </ul>
  );
}

export default TurnsList