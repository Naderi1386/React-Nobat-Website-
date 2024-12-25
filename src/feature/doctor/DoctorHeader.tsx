interface DoctorHeaderPropType {
  name: string;
  specialty: string;
  image: string;
  accepting_patients: boolean;
}

const DoctorHeader = ({accepting_patients,image,name,specialty}:DoctorHeaderPropType) => {
  return (
    <div className="flex gap-5">
      <img
        src={image}
        alt={`${name}.img`}
        className="w-[100px] h-[135px]  border border-solid border-stone-500/20 rounded-[4px]"
      />
      <div>
        <h2 className="font-bold text-[1rem] sm:text-[1.35rem] mb-3 flex gap-2">
          <img
            className="w-[1.2rem] h-[1.2rem] order-1 self-end"
            src="https://nobat.ir/public/ui_v2_0/images/uiv2/verified-icon.png"
            alt=""
          />
          {name}
        </h2>
        <h2 className="text-[0.9rem] sm:text-base text-doctor-800  mb-5">متخصص {specialty} </h2>
        {accepting_patients && (
          <span className="text-xs text-stone-400">نوبت دهی</span>
        )}
      </div>
    </div>
  );
};

export default DoctorHeader;
