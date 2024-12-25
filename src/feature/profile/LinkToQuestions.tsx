import { FaQuestion } from "react-icons/fa6";


const LinkToQuestions = () => {

  return (
    <a
      href="https://drhast.com/q"
      target="_blank"
      className="flex rounded-[1.1rem] shadow-custome1 py-[0.60rem] flex-col items-center w-[50%]"
    >
      <span className="w-[26px] h-[26px] bg-stone-200 rounded-[100%] flex justify-center items-center">
        <FaQuestion fill="white" size={18} />
      </span>
      <span className="font-semibold text-[.75rem] sm:text-base">
        پرسش و پاسخ
      </span>
    </a>
  );
}; 

export default LinkToQuestions;
