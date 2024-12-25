import { useState } from "react";
import { useLogin } from "./useLogin";
import { NewUserType } from "../../services/apiUser";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onSignup, isSigningup } = useLogin();
  const onSubmit = () => {
    if (password && email) {
      const info: NewUserType = {
        email,
        password,
      };
      onSignup(info, {
        onError: () => {
          setEmail("");
          setPassword("");
        },
      });
    }
  };
  return (
    <div className="flex flex-col gap-16 items-center w-full pt-[12rem]">
      <div className="inline-block">
        <h2 className="mb-5">لطفا ایمیل و پسورد خود را وارد نمایید</h2>
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input
            disabled={isSigningup}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none mb-4 w-full border border-solid border-customeGrey-300/35 pl-2 pb-2 pt-2 font-semibold"
            type="email"
            dir="ltr"
            required
            placeholder="example@gmail.com"
          />
          <br />
          <input
            disabled={isSigningup}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none mb-4 w-full border border-solid border-customeGrey-300/35 pl-2 pb-2 pt-2 font-semibold"
            type="password"
            dir="ltr"
            required
            placeholder="********"
            minLength={3}
            maxLength={15}
          />
          <button
            type="submit"
            className="w-[65px] bg-greyBtn-500 text-white pb-2 block mx-auto rounded-[0.15rem]"
          >
            ورود
          </button>
        </form>
      </div>
      <br />
      <div className="w-[241px]">
        <Link
          to={"/login"}
          className="text-[0.85rem] text-greyBtn-600 font-semibold"
        >
          حساب دارم
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
