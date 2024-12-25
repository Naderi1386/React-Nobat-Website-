import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PAGE_SIZE, useDoctors } from "../feature/home/useDoctors";
import { useDoctorsLength } from "../hooks/useDoctorsLength";
import { useFilterRoute } from "../hooks/useFilterRoute";

const Pagination = () => {
  const {isLoading}=useDoctors()
  const { count } = useDoctorsLength();
  const size = Math.round(count / PAGE_SIZE);

  const array: number[] = [];
  const { filterRoute, searchParams,setSearchParams } = useFilterRoute();

  if(isLoading) return null
  if (count < PAGE_SIZE + 1) return null;
  const page = searchParams.get("page") || "1";
  for (let i: number = 1; i <= size; i++) {
    array.push(i);
  }

  return (
    <div className="flex justify-center py-8 gap-3 ">
      {Number(page) != 1 && (
        <span onClick={()=>{
           searchParams.set("page", String(Number(page) + -1));
           setSearchParams(searchParams);
        }} className="cursor-pointer border h-8 border-solid border-stone-500/15 w-8 flex justify-center items-center rounded-full">
          <FaAngleRight />
        </span>
      )}

      {array.map((number, index) => (
        <span
          key={index}
          onClick={() => filterRoute("page", String(number))}
          className={`cursor-pointer border h-8 border-solid border-stone-500/15 w-8 flex justify-center items-center rounded-full ${
            page === String(number) && "bg-header-500 text-white/70"
          }`}
        >
          {number}
        </span>
      ))}
      {Number(page) != size && (
        <span
          onClick={() => {
            searchParams.set("page", String(Number(page) + 1));
            setSearchParams(searchParams);
          }}
          className="cursor-pointer border h-8 border-solid border-stone-500/15 w-8 flex justify-center items-center rounded-full"
        >
          <FaAngleLeft />
        </span>
      )}
    </div>
  );
};

export default Pagination;
