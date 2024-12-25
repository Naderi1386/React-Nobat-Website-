import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getDoctor } from "../../services/apiDoctors"

export const useDoctor=()=>{
    const {doctorId}=useParams()
    
    const { isLoading, data: doctor } = useQuery({
      queryKey: ["doctor", doctorId],
      queryFn: () => getDoctor(doctorId as string),
    });
    return {isLoading,doctor}
}