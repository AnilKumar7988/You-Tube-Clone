import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import YtLogo from "../../public/YtLogo.png";

const Navbar = ({toggleSideNavbar}) => {
  return (
    <>
      <div className="flex justify-between items-center px-6 ">
        <div className="flex items-center gap-6 w-[25%]  ">
          <AiOutlineMenu className="text-xl cursor-pointer" onClick={toggleSideNavbar} />
          <img src={YtLogo} alt="You Tube" className="w-28" />
        </div>
        <div className="flex items-center justify-center p-5 w-[50%] ">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 h-10 border border-gray-300 border-r-0 rounded-l-full outline-none"
          />
          <button className="w-16 h-10 flex items-center justify-center border border-gray-300 border-l-0 rounded-r-full bg-gray-100  hover:bg-gray-200 ">
            <FaMagnifyingGlass />
          </button>
        </div>
        <div className="flex justify-end  items-center gap-10  w-[25%] ">
          <div className="flex gap-2 rounded-full p-2 bg-gray-100 hover:bg-gray-200">
            <button>
              <AiOutlinePlus className="text-l" />
            </button>
            <p className="text-l">Create</p>
          </div>
          <div>
            <MdOutlineNotificationsNone className="text-3xl " />
          </div>
          <div className="flex">
            <MdOutlineAccountCircle className="text-3xl" />
            <p className="text-xl text-blue-500 hover:text-blue-800">Sign in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
