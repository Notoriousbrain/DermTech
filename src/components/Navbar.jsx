import React, { useState } from 'react'
import { Button } from './'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);
    const location = useLocation();

    const openMenu = () => {
        setMobileView(!mobileView);
    }

  return (
    <div>
      <div className="h-[9vh] dark:bg-my-dark bg-my-light py-4 xs:py-2 px-10 md:px-8 sm:px-6 xs:px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl dark:text-white">
          DermaTech
        </Link>
        <div className="flex items-center space-x-6 md:hidden">
          <Link
            to="/about-us"
            className={`font-semibold text-lg tracking-wider  ${
              location.pathname === "/about-us"
                ? "text-my-green"
                : " dark:text-white text-black"
            } `}
          >
            About Us
          </Link>
          <Link
            to="/help"
            className={`font-semibold text-lg tracking-wider ${
              location.pathname === "/help"
                ? "text-my-green"
                : "dark:text-white text-black"
            } `}
          >
            Help
          </Link>
          <Button btnName="Try DermaTech" classStyles="text-base" />
          <Link
            to="/profile"
            className={`font-semibold text-lg tracking-wider ${
              location.pathname === "/profile"
                ? "text-my-green"
                : "dark:text-white text-black"
            } `}
          >
            Profile
          </Link>
        </div>
        <div onClick={openMenu} className="hidden md:block cursor-pointer">
        {!mobileView ? (
          <AiOutlineMenu className="w-6 h-6 xs:h-5 xs:w-5 cursor-pointer dark:text-white" />
        ) : (
          <RxCross2 className="w-7 h-7 xs:h-5 xs:w-5 cursor-pointer dark:text-white" />
        )}
        </div>
      </div>
      <div
        className={`dark:bg-my-dark/80 bg-white/80 absolute flex flex-col h-full w-full py-4 px-4 space-y-4 ${
          !mobileView ? "-translate-x-full" : "translate-x-0"
        } duration-300 `}
      >
        <Link
          to="/about-us"
          className={`font-semibold tracking-wider  ${
            location.pathname === "/about-us"
              ? "text-my-green"
              : "dark:text-white text-black"
          } `}
        >
          About Us
        </Link>
        <Link
          to="/help"
          className={`font-semibold tracking-wider ${
            location.pathname === "/help"
              ? "text-my-green"
              : "dark:text-white text-black"
          } `}
        >
          Help
        </Link>
        <Link
          to="/profile"
          className={`font-semibold tracking-wider  ${
            location.pathname === "/profile"
              ? "text-my-green"
              : "dark:text-white text-black"
          } `}
        >
          Profile
        </Link>
        <Button btnName="Try DermaTech" />
      </div>
    </div>
  );
}

export default Navbar