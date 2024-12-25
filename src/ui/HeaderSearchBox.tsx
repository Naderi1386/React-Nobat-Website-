import { useState } from "react";
import SearchInput from "./SearchInput";
import { IoIosSearch } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";

const HeaderSearchBox = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city") || "تهران";
  const handleSubmit = () => {
    setInput("");
    setIsSearchBoxOpen(false);
    navigate(`/search/${input}/?city=${city}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (input) handleSubmit();
      }}
      className=" gap-1 items-center order-1 h-full   flex justify-end  "
    >
      <div className="order-1">
        <IoIosSearch
          className="cursor-pointer"
          size={20}
          style={{ color: "gray" }}
          onClick={() => {
            if (!input) setIsSearchBoxOpen((open) => !open);
            else handleSubmit();
          }}
        />
      </div>
      {isSearchBoxOpen && (
        <SearchInput
          value={input}
          onChange={(e: string) => setInput(e)}
          onClick={() => setIsSearchBoxOpen(false)}
        />
      )}
    </form>
  );
};

export default HeaderSearchBox;
