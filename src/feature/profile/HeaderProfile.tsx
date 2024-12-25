import { useNavigate } from "react-router-dom";
import Logo from "../../ui/Logo";
import { GrFormPrevious } from "react-icons/gr";

const HeaderProfile = () => {
  const navigate = useNavigate();
  const onLast = () => navigate(-1);
  return (
    <header className=" bg-header-500 py-2 px-8 mb-12">
      <div className="flex justify-between items-center max-w-[750px] mx-auto">
        <Logo size="small" />
        <span onClick={onLast} role="button" className="cursor-pointer">
          <GrFormPrevious size={30} stroke="white" />
        </span>
      </div>
    </header>
  );
};

export default HeaderProfile;
