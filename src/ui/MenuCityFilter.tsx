import { IoMdClose } from "react-icons/io";

import { cloneElement, ReactNode, useEffect, useState } from "react";

interface MenuCityFilterPropType {
  onClose?: () => void;
  children: ReactNode;
  filterBy: string;
}

const MenuCityFilter = ({
  onClose,
  children,
  filterBy,
}: MenuCityFilterPropType) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 70);
  }, []);

  return (
    <div className={`backdrop-brightness-75 fixed  inset-0  `}>
      <div
        className={`w-[100%]  sm:w-[24rem] px-4 transition-all  duration-300 ease-in  ${
          show ? "bottom-0 sm:top-0 sm:right-0`" : "bottom-[-1000px] sm:right-[-1000px]"
        } overflow-auto rounded-t-[70px] sm:rounded-[0px] bg-white  fixed  bottom-0 h-[75svh]    sm:h-[100vh]  sm:top-0 sm:right-0`}
      >
        <div className="sticky top-0 bg-white pt-[1rem] space-y-4">
          <span
            className="cursor-pointer flex justify-center sm:justify-start"
            onClick={()=>{
              setShow(false)
              setTimeout(() => {
                onClose?.()
              }, 150);
            }}
          >
            <IoMdClose size={24} />
          </span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="input w-full"
            placeholder={`نام ${filterBy} خود را وارد کنید `}
          />
        </div>
        {cloneElement(children as JSX.Element, {
          onClose: onClose,
          filter: value,
        })}
      </div>
    </div>
  );
};

export default MenuCityFilter;
