import { useState } from "react";
import { RuleType } from "../../services/apiRules";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

interface RuleItemsPropType {
  rule: RuleType;
  index: number;
}

const RuleItems = ({ rule, index }: RuleItemsPropType) => {
  const [isOpen, setIsOpen] = useState(()=>{
    if(index===0)return true
    return false
  });
  const { content, title, listItems, listTitle } = rule;
  const onChangeState = () => setIsOpen((open) => !open);

  return (
    <div className="border-b border-solid border-customeGrey-300/35 py-5 space-y-5 max-w-[668px] mx-auto lg:mx-0 lg:max-w-full">
      <div
        className="grid grid-cols-[auto,auto] items-center justify-between cursor-pointer gap-4"
        onClick={onChangeState}
      >
        <h2
          className={`  ${
            index === 0
              ? "text-[1.15rem] sm:text-[1.5rem] font-bold"
              : " text-[0.88rem] sm:text-[1rem] font-semibold"
          }`}
        >
          {title}
        </h2>
        <span
          className="w-[2.5rem] h-[2.5rem] rounded-[100%] inline-flex justify-center items-center bg-buttonGrey-500"
          role="button"
        >
          {isOpen ? <LuMinus size={20} /> : <LuPlus size={20} />}
        </span>
      </div>
      {isOpen && (
        <div className="space-y-[1.4rem] text-justify text-customeGrey-300 leading-[2] text-[0.9rem] font-semibold">
          {listTitle && listTitle?.map((lt) => <p>{lt}</p>)}
          {listItems && (
            <ul className="list-disc pr-9 space-y-[0.2rem]">
              {listItems.map((li) => (
                <li>{li}</li>
              ))}
            </ul>
          )}
          {content.map((content) => (
            <p>{content}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default RuleItems;
