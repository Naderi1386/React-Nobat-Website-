import {  useSearchParams } from "react-router-dom";
import LinkBackHome from "../../ui/LinkBackHome";

const HomeTitle = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const specialty = searchParams.get("specialty");
  
  if(!city && !specialty) return null
  return (
    <div className="mb-6 text-[0.8rem] smCustome:text-xl md:text-2xl font-semibold text-title-800 flex flex-col smSecondCustome:flex-row gap-3 justify-between items-start smSecondCustome:items-center">
      {city && !specialty && <h1> لیست بهترین دکتر های {city} </h1>}
      {!city && specialty && (
        <h1> لیست دکتر های {specialty} (متخصص و فوق تخصص)</h1>
      )}
      {city && specialty && (
        <h1>
          {" "}
          لیست دکتر های {specialty} (متخصص و فوق تخصص) در {city}
        </h1>
      )}
      <LinkBackHome/>
    </div>
  );
};

export default HomeTitle;
