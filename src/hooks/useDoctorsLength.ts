import { useDoctors } from "../feature/home/useDoctors"

export const useDoctorsLength=()=>{
    const {filterDoctors}=useDoctors()
    const count=filterDoctors?.length as number
    return {count}
}