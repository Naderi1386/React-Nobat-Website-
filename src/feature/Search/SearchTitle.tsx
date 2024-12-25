interface SearchTitlePropType{
    name:string
}
const SearchTitle = ({name}:SearchTitlePropType) => {

  return (
    <div className="text-center mb-8">
      <span className="text-searchTitle-500 inline-block mb-2 text-[0.85rem] font-bold">نتایج جستجو برای عبارت متنی وارد شده :</span>
      <h1 className="text-[1.8rem] font-semibold">{name}</h1>
    </div>
  );
}

export default SearchTitle