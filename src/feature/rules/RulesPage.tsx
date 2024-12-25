import { rules } from "../../services/apiRules";
import { medicalSpecialties } from "../../services/apiSpecialties";
import HeaderNobatImg from "../../ui/HeaderNobatImg";
import ItemsSpecialtiesTable from "../../ui/ItemsSpecialtiesTable";
import MainButton from "../../ui/MainButton";
import MainLinks from "../../ui/MainLinks";
import MenuCityFilter from "../../ui/MenuCityFilter";
import Modal from "../../ui/Modal";
import RuleItems from "./RuleItems";
import RulesHeader from "./RulesHeader";

const RulesPage = () => {
  return (
    <>
      <div className="py-8 px-[1rem] md:px-[4.5rem] lg:px-[12rem] xl:px-[16rem]">
        <div className="flex  flex-col mb-[4rem] lg:flex-row gap-10 items-center justify-center lg:justify-between">
          <RulesHeader />
          <HeaderNobatImg />
        </div>
        <div className="mb-14">
          {rules.map((rule, index) => (
            <RuleItems key={index} index={index} rule={rule} />
          ))}
        </div>
      </div>
      <MainLinks>
        <Modal>
          <Modal.Open opens="rules">
            <MainButton>دسته بندی پزشکان</MainButton>
          </Modal.Open>
          <Modal.Window name="rules">
            <MenuCityFilter filterBy="تخصص">
              <ItemsSpecialtiesTable
                filterName="specialty"
                filterPersian="تخصص"
                items={medicalSpecialties}
              />
            </MenuCityFilter>
          </Modal.Window>
        </Modal>
      </MainLinks>
    </>
  );
};

export default RulesPage;
