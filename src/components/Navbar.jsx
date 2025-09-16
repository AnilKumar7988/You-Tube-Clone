import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  MdOutlineAccountCircle,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import YtLogo from "/YtLogo.png";
import Signin from "./Signin";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSideNavbar, setSearchItem }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSignin, setShowSignin] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Keep localStorage updated whenever user changes
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const handleSearchClick = () =>
    setSearchItem(inputValue.trim().toLowerCase());

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-0 fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="flex items-center gap-3 sm:gap-6">
          <AiOutlineMenu
            className="text-xl cursor-pointer"
            onClick={toggleSideNavbar}
          />
          <img
            src={YtLogo}
            alt="You Tube"
            className="w-20 sm:w-28 hidden sm:block"
          />
        </div>

        <div className="flex items-center flex-1 justify-start px-2">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            className="flex-1 max-w-[160px] sm:max-w-[260px] md:max-w-[520px] px-3 h-8 sm:h-10 border border-gray-300 border-r-0 rounded-l-full outline-none text-sm sm:text-base"
          />
          <button
            className="w-10 sm:w-16 h-8 sm:h-10 flex items-center justify-center border border-gray-300 border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200"
            onClick={handleSearchClick}
          >
            <FaMagnifyingGlass />
          </button>
        </div>

        {/* Right: create, notifications, account */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Create button */}
          {user && (
            <Link to="/channel">
              <div className="flex gap-2 rounded-full p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <p className="text-l">Create</p>
              </div>
            </Link>
          )}

          {/* Notifications */}
          <MdOutlineNotificationsNone className="text-3xl hidden sm:block" />

          {/* Account / username */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                if (user) setShowDropdown(!showDropdown);
                else setShowSignin(true);
              }}
            >
              <MdOutlineAccountCircle className="text-2xl sm:text-3xl" />
              <p className="text-sm sm:text-base text-blue-500 hover:text-blue-800 truncate max-w-[110px] sm:max-w-none">
                {user ? user.username : "Sign in"}
              </p>
            </div>

            {/* Logout dropdown */}
            {showDropdown && user && (
              <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded-lg z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Signin modalo */}
      <Signin
        show={showSignin}
        onClose={() => setShowSignin(false)}
        setUser={setUser}
      />
    </>
  );
};

export default Navbar;
