import { useLogout } from "./useLogout"
interface LogoutModalPropType{
    onClose?:()=>void
}

const LogoutModal = ({onClose}:LogoutModalPropType) => {
    const {onLogout,isLogingout}=useLogout()
  return (
    <div className="backdrop-brightness-75 absolute inset-0 pt-[3.2rem]">
      <div className="max-w-[500px] mx-auto bg-white shadow-custome2 p-4">
        <h3 className="font-semibold mb-1">خروج از حساب</h3>
        <p className="text-[.85rem] mb-[.7rem]">آیا می خواهید از حساب خود خارج شوید ؟</p>
        <div className="flex gap-3 justify-end items-center">
          <button
          onClick={()=>onLogout()}
            disabled={isLogingout}
            className="w-[50px] pt-[.15rem] pb-[.35rem] text-white bg-customePurple-400"
          >
            بله
          </button>
          <button
            onClick={onClose}
            disabled={isLogingout}
            className="w-[50px] pt-[.15rem] pb-[.35rem] text-greyBtn-500"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal