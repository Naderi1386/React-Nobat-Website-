import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import DoctorsItems from "./DoctorsItems";
import { PAGE_SIZE, useDoctors } from "./useDoctors";

const DoctorsList = () => {
  const { isLoading, filterDoctors } = useDoctors();
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const startIndex = Number(currentPage) * PAGE_SIZE - (PAGE_SIZE - 1);
  const endIndex = startIndex + PAGE_SIZE - 1;
  
  const doctors = filterDoctors?.filter(
    (doctor, index) => index + 1 >= startIndex && index + 1 <= endIndex
  );

  if (isLoading)
    return (
      <div className="w-[10%] mx-auto">
        <Spinner />
      </div>
    );
  if (!filterDoctors?.length) return <Empty>دکتر مورد نظر یافت نشد</Empty>;
  return (
    <ul className=" space-y-4 lg:space-y-0    items-baseline   lg:flex lg:flex-col custome1355:flex-row custome1355:flex-wrap lg:gap-3 py-5   ">
      {doctors!.map((doctor, index) => (
        <DoctorsItems doctor={doctor} key={index} />
      ))}
    </ul>
   
  );
};

export default DoctorsList;
