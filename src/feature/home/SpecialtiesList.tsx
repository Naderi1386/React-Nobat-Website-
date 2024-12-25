import { useFilterRoute } from "../../hooks/useFilterRoute";
import { medicalSpecialties } from "../../services/apiSpecialties";

const SpecialtiesList = () => {
  const { filterRoute,setSearchParams,searchParams } = useFilterRoute();

  return (
    <ul className="list-disc  basis-[15rem]  pr-4 text-stone-600 text-[0.95rem] space-y-4 hidden md:block">
      {medicalSpecialties.map((specialty, index) => (
        <li
          key={index}
          onClick={() => {
            filterRoute("specialty", specialty);
            searchParams.set('page','1')
            setSearchParams(searchParams)
          }}
          className="cursor-pointer transition-all duration-75 hover:text-black"
        >
          {specialty}
        </li>
      ))}
    </ul>
  );
};

export default SpecialtiesList;
