interface DoctorAddressPropType {
  address: string;
}
const DoctorAddress = ({ address }: DoctorAddressPropType) => {
  const city = address.split(" ").at(0)?.replace("،", "");
  const mainAddress = address
    .split(" ")
    .slice(1, 3)
    .join(" ")
    ?.replace("،", "");

  return (
    <div className="mb-14">
      <h3 className="font-bold py-3 px-4 bg-city-300 text-city-700 mb-6">
        مطب {mainAddress}
      </h3>
      <div className="pr-6">
        <h2 className="mb-6 text-xl font-semibold inline-flex justify-center items-center  text-center h-[39px] px-[10px]  bg-customeGrey-600">
          {city}
        </h2>
        <p className="font-bold text-[14px]">{address}</p>
      </div>
    </div>
  );
};

export default DoctorAddress;
