import { useLocation } from "react-router-dom";
import HeaderSearchBox from "./HeaderSearchBox";
import Logo from "./Logo";
import Modal from "./Modal";
import MenuCityFilter from "./MenuCityFilter";
import ButtonLink from "./ButtonLink";
import ButtonFilter from "./HeaderButtonFilter";
import ItemsTable from "./ItemsTable";
import { cities } from "../services/apiCities";
import { useCurrentUser } from "../feature/login/useCurrentUser";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  const {user}=useCurrentUser()
  const { pathname } = useLocation();

  return (
    <header>
      {user && <HeaderProfile />}
      <div className="flex justify-between bg-header-500 py-9  px-[2rem] lg:px-[12rem] xl:px-[16rem]">
        <Logo size="large" />
        {!user && (
          <ButtonLink size="small" to="/signup">
            ورود
          </ButtonLink>
        )}
      </div>
      {pathname !== "/contact-us" && pathname !== "/rules" && (
        <div
          className={`bg-searchBox-300  md:h-[5rem] py-3 sm:py-0 px-[2rem] lg:px-[12rem] xl:px-[16rem] flex flex-col sm:flex-row ${
            pathname === "/" && "sm:justify-between h-[6.65rem] "
          } ${
            pathname !== "/" && "sm:justify-end h-[4rem]"
          } sm:items-center gap-3`}
        >
          <HeaderSearchBox />

          {pathname === "/" && (
            <Modal>
              <Modal.Open opens="city">
                <ButtonFilter filterDefaultValue="تهران" filterValue="city" />
              </Modal.Open>
              <Modal.Window name="city">
                <MenuCityFilter filterBy="شهر">
                  <ItemsTable
                    items={cities}
                    filterName="city"
                    filterPersian="شهر"
                  />
                </MenuCityFilter>
              </Modal.Window>
            </Modal>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
