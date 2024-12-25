import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../services/apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const { mutate: onSignup,isPending:isLogingin } = useMutation({
    mutationFn: logIn,
    onSuccess: () => {
      toast.success("شما با موفقیت به حساب خود وارد شدید");
      navigate("/");
    },
    onError: (err) => {
      console.error(err);
      toast.error("لطفا ایمیل و پسورد صحیح را وارد کنید");
    },
  });
  return { onSignup, isLogingin };
};
