import { useMutation } from "@tanstack/react-query";
import {  signUp } from "../../services/apiUser";
import toast from "react-hot-toast";

export const useLogin = () => {
  const { mutate: onSignup,isPending:isSigningup } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("ایمیل تایید به حساب شما ارسال شد.لطفا ایمیل خودرا چک کنید")
    },
    onError: (err) => {
      console.error(err);
      
    },
  });

  return { onSignup, isSigningup };
};
