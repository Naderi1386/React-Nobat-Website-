import { useDispatch, useSelector } from "react-redux";
import BackHomeFilter from "../../ui/BackHomeFilter";
import MainLinks from "../../ui/MainLinks";
import Spinner from "../../ui/Spinner";
import AvailableDays from "./AvailableDays";
import DoctorAddress from "./DoctorAddress";
import DoctorAddressMap from "./DoctorAddressMap";
import DoctorHeader from "./DoctorHeader";
import DoctorTell from "./DoctorTell";
import { useDoctor } from "./useDoctor";
import { FaHeart } from "react-icons/fa6";
import { DispatchType, getFavorite, getTurn, StoreType } from "../../Redux/Store";
import { addDoctor, FavoriteType, removeDoctor } from "../../Redux/Favorites";
import toast from "react-hot-toast";
import DoctorTurn from "./DoctorTurn";
import Modal from "../../ui/Modal";
import TurnModal from "../turn/TurnModal";
import { TurnType } from "../../Redux/Turn";
import { persianLeftDays } from "../../utils/helper";


const DoctorPage = () => {
  const { doctor, isLoading } = useDoctor();
  const city = doctor?.address.split(" ").at(0)?.replace("،", "");
  const favorite=useSelector<StoreType>(getFavorite(doctor?.id as string)) as FavoriteType
  const turn=useSelector<StoreType>(getTurn(doctor?.id as string)) as TurnType
  const dispatch=useDispatch<DispatchType>()
  
  const days = doctor?.working_hours.map((w) => w.day);
  const leftDays = persianLeftDays(days) as string[];
  
  
  const onClickHeart=()=>{
    if(!favorite){
      toast.success(`${doctor?.name} به لیست علاقه مندی شما اضافه شد`)
      const newFav: FavoriteType = {
        id: doctor!.id,
        image: doctor!.image,
        name: doctor!.name,
        phone: doctor!.phone,
        specialty: doctor!.specialty,
      };
      dispatch(addDoctor(newFav))

    }
    else {
            toast.success(
              ` ${doctor?.name} از لیست علاقه مندی شما حذف شد`
            );

      dispatch(removeDoctor(doctor!.id))

    }
  }
  


  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="mb-8 px-[2rem] lg:px-[12rem] xl:px-[16rem]">
        <DoctorHeader
          image={doctor?.image as string}
          accepting_patients={doctor?.accepting_patients as boolean}
          name={doctor?.name as string}
          specialty={doctor?.specialty as string}
        />
      </div>
      <div
        className={` ${
          Number(doctor?.rating) < 3
            ? "bg-customeGrey-600"
            : "bg-customeGold-400"
        } h-[4rem] mb-12 flex items-center justify-center`}
      >
        <span
          onClick={onClickHeart}
          className={`cursor-pointer transition-all duration-75 ${
            favorite ? "text-red-500" : "text-white"
          } hover:text-[#EF9A9A]`}
        >
          <FaHeart size={20} />
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-9 px-[2rem] lg:px-[12rem] xl:px-[16rem] mb-20">
        <div className="basis-[100%] md:basis-[50%] overflow-hidden">
          <AvailableDays working_hours={doctor!.working_hours} />
        </div>
        <div className="basis-[100%] md:basis-[50%]">
          <DoctorAddress address={doctor?.address as string} />
          <div className="h-[225px] w-full relative mb-6">
            <DoctorAddressMap
              x={doctor?.coordinates.x as number}
              y={doctor?.coordinates.y as number}
            />
          </div>
          <div className="flex items-center gap-2"></div>

          <DoctorTell phone={doctor?.phone as string} />
          {leftDays.length===0 && <p className="text-center mt-4 text-[.7rem]">درحال حاضر پذیرش بیمار جدید امکان پذیر نیست</p>}
          {(doctor?.accepting_patients && !turn && leftDays.length>0) &&  (
            <Modal>
              <Modal.Open opens="turn">
                <DoctorTurn />
              </Modal.Open>
              <Modal.Window name="turn">
              <TurnModal doctor={doctor}  />
              </Modal.Window>
            </Modal>
          )}
        </div>
      </div>
      <MainLinks>
        <BackHomeFilter
          to={`/?specialty=${doctor?.specialty}&city=${city}&page=1`}
        >
          لیست پزشکان {doctor?.specialty} {city}
        </BackHomeFilter>
      </MainLinks>
    </div>
  );
};

export default DoctorPage;
