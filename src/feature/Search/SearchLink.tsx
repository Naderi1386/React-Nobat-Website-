import { useSearchParams } from "react-router-dom";
import { medicalSpecialties } from "../../services/apiSpecialties";
import BackHomeFilter from "../../ui/BackHomeFilter";

interface SearchLinkPropType {
  name: string;
  shortName:string
}

const SearchLink = ({ name,shortName }: SearchLinkPropType) => {
  const [searchParams]=useSearchParams()
  const city=searchParams.get('city')
  const searchedSpecialty = medicalSpecialties
    .filter((sp) => sp.includes(shortName))
    .at(0);
  
  const isSpecialty = medicalSpecialties.includes(name) || searchedSpecialty;
  const to = isSpecialty ? `/?specialty=${searchedSpecialty}&page=1&city=${city}` : `/`;

  return (
    <BackHomeFilter to={to}>
      {isSpecialty ? `لیست پزشکان  ${searchedSpecialty} شهر ${city}` : "بازگشت به صفحه اصلی"}
    </BackHomeFilter>
  );
};

export default SearchLink;
