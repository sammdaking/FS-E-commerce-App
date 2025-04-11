/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { SlBasketLoaded } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import LanguageDropDown from "../LanguageDrowdown/LanguageDropdown";

const navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  // const [visibleButton, setVisibleButton] = useState(false);
  // const handleVisibleButton = () => {
  //   setVisibleButton(true);
  // };
  return (
    <div className="flex  h-18 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white justify-evenly items-center">
      <div className="">
        <h2
          onClick={navigateHome}
          className=" cursor-pointer text-xs lg:text-xl font-bold"
        >
          Mermed Medikal
        </h2>
      </div>
      <div className="w-24 sm:w-16 md:w-56   lg:w-96">
        <input
          type="search"
          className="block w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 
                 border border-transparent hover:border-white/30 
                 focus:border-white focus:ring-2 focus:ring-white/20 
                 placeholder:text-gray-300 text-white outline-none 
                 transition-all duration-200 "
          placeholder="Search ..."
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <div className="flex justify-around items-center  gap-10">
        <SlBasketLoaded size={25} className="cursor-pointer" />
        <VscAccount size={25} className="cursor-pointer" />
      </div>

      <div className="h-5  flex ">
        <LanguageDropDown />
      </div>
    </div>
  );
};

export default navbar;
