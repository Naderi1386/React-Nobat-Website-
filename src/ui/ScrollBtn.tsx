import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 700) {
      setVisible(true);
    } else if (scrolled <= 700) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
        behavior:'smooth',
        top:0
    });
  };

  window.addEventListener("scroll", toggleVisible);
  if (!visible) return null;
  return (
    <div onClick={scrollToTop} className="w-[52px] h-[52px] fixed cursor-pointer right-4 bottom-4 bg-[#BDBDBD] flex justify-center items-center rounded-[100%]">
      <FaChevronUp fill="white" size={22} />
    </div>
  );
};

export default ScrollBtn;
