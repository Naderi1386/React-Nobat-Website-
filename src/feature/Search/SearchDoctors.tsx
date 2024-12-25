import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useDoctors } from "../home/useDoctors";
import Empty from "../../ui/Empty";
import SearchTitle from "./SearchTitle";
import DoctorsItemsSearch from "./DoctorsItemsSearch";
import MainLinks from "../../ui/MainLinks";
import SearchLink from "./SearchLink";

const SearchDoctors = () => {
  const { isLoading, filterDoctors: doctors } = useDoctors();
  const { name } = useParams();
  const shortName = name?.split(" ").at(0);
  

  const filterDoctors = doctors?.filter(
    (doctor) =>
      doctor.name.includes(String(name)) ||
      doctor.specialty.startsWith(name as string) ||
      doctor.specialty.includes(shortName as string)
  );

  if (isLoading) return <Spinner />;
  if (!filterDoctors?.length) return <Empty>دکتر مورد نظر یافت نشد</Empty>;

  return (
    <div>
      <div className="pt-9  px-[2rem] lg:px-[12rem] xl:px-[16rem]">
        <SearchTitle name={name as string} />
      </div>
      <ul className="w-full  md:w-[85%] mb-6   md:mx-auto space-y-4 lg:space-y-0 md:px-[2rem] lg:px-[12rem] xl:px-[16rem]     lg:flex lg:flex-col custome1355:flex-row custome1355:flex-wrap lg:gap-3 pt-5 pb-5   ">
        {filterDoctors.map((doctor, index) => (
          <DoctorsItemsSearch doctor={doctor} key={index} />
        ))}
      </ul>
      <MainLinks>
        <SearchLink name={name as string} shortName={shortName as string} />
      </MainLinks>
    </div>
  );
};

export default SearchDoctors;
