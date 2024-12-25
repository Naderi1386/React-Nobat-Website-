import { useMutation } from "@tanstack/react-query"
import { Logout } from "../../services/apiUser"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useLogout=()=>{
    const navigate=useNavigate()
    const {isPending:isLogingout,mutate:onLogout}=useMutation({
        mutationFn:Logout,
        onSuccess:()=>{
            navigate('/')
            toast.success("شما با موفقیت از حساب خود خارج شدید")
        },
        onError:()=>{
            toast.error("مشکلی بوجود امده است")
        }
    })
    return {isLogingout,onLogout}
}