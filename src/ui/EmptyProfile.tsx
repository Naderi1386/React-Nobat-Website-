import { PiEmpty } from "react-icons/pi";

interface EmptyProfilePropType {
  text: string;
}

const EmptyProfile = ({ text }: EmptyProfilePropType) => {
  return (
    <div className="text-center max-w-[720px] mx-auto mb-10">
      <PiEmpty
        size={25}
        className="mx-auto"
        fill="#9E9E9E"
      />
      <h3 className="text-[.95rem]" style={{ color: "#9E9E9E" }}>
        {text}
      </h3>
    </div>
  );
};

export default EmptyProfile;
