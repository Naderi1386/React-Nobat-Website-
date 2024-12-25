import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../../services/apiDoctors";
import { useSearchParams } from "react-router-dom";

export const PAGE_SIZE = 6;

export const useDoctors = () => {
  const [searchParams] = useSearchParams();
  const specialty = searchParams.get("specialty") || "";
  const city = searchParams.get("city");

  const { isLoading, data: doctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  const doctorsByCity = city
    ? doctors?.filter(
        (doctor) => doctor.address.split(" ").at(0)?.replace("،", "") === city
      )
    : doctors;

  const filterDoctors = specialty
    ? doctorsByCity?.filter((doctor) => doctor.specialty === specialty)
    : doctorsByCity;

  return { isLoading, filterDoctors,doctors };
};
