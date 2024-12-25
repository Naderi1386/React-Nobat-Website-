import Doctors from "../feature/home/Doctors";
import HomeTitle from "../feature/home/HomeTitle";
import SpecialtiesList from "../feature/home/SpecialtiesList";
import ButtonFilter from "../ui/HeaderButtonFilter";
import MenuCityFilter from "../ui/MenuCityFilter";
import Modal from "../ui/Modal";
import ItemsTable from "../ui/ItemsTable";
import { medicalSpecialties } from "../services/apiSpecialties";
import MainLinks from "../ui/MainLinks";
import MainLink from "../ui/MainLink";
import Pagination from "../ui/Pagination";

const Home = () => {
  return (
    <>
      <div className="py-5 px-[2rem] lg:px-[12rem] xl:px-[16rem]">
        <HomeTitle />
        <div className="mb-4 md:hidden">
          <Modal>
            <Modal.Open opens="specialty">
              <ButtonFilter
                filterDefaultValue="لیست تخصص ها"
                filterValue="specialty"
              />
            </Modal.Open>
            <Modal.Window name="specialty">
              <MenuCityFilter filterBy="تخصص">
                <ItemsTable
                  filterName="specialty"
                  filterPersian="تخصص"
                  items={medicalSpecialties}
                />
              </MenuCityFilter>
            </Modal.Window>
          </Modal>
        </div>
        <div className="  md:flex md:items-baseline   md:gap-4">
          <SpecialtiesList />
          <div className="md:basis-[48rem]">
            <Doctors />
            <Pagination/>
          </div>
        </div>
       
      </div>
      <MainLinks>
        <div className="flex justify-center items-center">
          <MainLink to="https://drhast.com/q">پرسش و پاسخ پزشکی</MainLink>
        </div>
      </MainLinks>
    </>
  );
};

export default Home;
