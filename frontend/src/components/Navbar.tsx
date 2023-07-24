import React, { useState } from "react";
import sblogo from "../assets/sblogo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="fixed z-50">
      <nav className="bg-white shadow-md p-4 md:px-32 md:py-6 fixed w-full font-sans z-[100]">
        <div className="flex justify-between items-center">
          <div className="flex gap-12 items-center">
            <Link to="/">
              <img src={sblogo} alt="sblogo" className="md:w-[50px] w-[40px]" />
            </Link>
            <div className="hidden md:flex gap-4 font-bold text-sm tracking-widest">
              <Link to="/menu" className="hover:text-green-800">
                MENU
              </Link>
              <Link to="/merchandise" className="hover:text-green-800">
                MERCHANDISE
              </Link>
              <Link to="/rewards" className="hover:text-green-800">
                REWARDS
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex gap-2 text-sm font-bold pr-6">
              <MdLocationOn size={25} />
              Find a Store
            </span>
            <button className="border border-black rounded-full px-4 py-1">
              Sign in
            </button>
            <button className="bg-black border border-black text-white px-4 py-1 rounded-full hover:bg-white hover:text-black">
              Join Now
            </button>
          </div>
          <div className="md:hidden">
            <div
              className="hover:bg-slate-200 p-2 rounded-full cursor-pointer"
              onClick={handleToggleMenu}
            >
              {toggleMenu ? (
                <AiOutlineClose size={22} />
              ) : (
                <AiOutlineMenu size={22} />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* menu bar */}
      {toggleMenu && (
        <div className="fixed md:hidden bg-gray-500/50 w-full h-full top-[73px] z-40">
          <div className="fixed bg-white w-[300px] flex flex-col top-0 right-0 p-5 h-full">
            <div className="flex flex-col gap-6 text-xl font-md mt-20 border-b-2 border-gray-300 py-6">
              <Link to="/menu" className="hover:text-green-800 cursor-pointer">
                Menu
              </Link>
              <Link
                to="/merchandise"
                className="hover:text-green-800 cursor-pointer"
              >
                Merchandise
              </Link>
              <Link
                to="/rewards"
                className="hover:text-green-800 cursor-pointer"
              >
                Rewards
              </Link>
            </div>
            <div className="flex flex-col items-start gap-4 mt-12">
              <span className="flex gap-2 text-lg">
                <MdLocationOn size={25} />
                Find a Store
              </span>
              <button className="text-lg border border-black rounded-full px-4 py-1">
                Sign in
              </button>
              <button className="text-lg bg-black border border-black text-white px-4 py-1 rounded-full hover:bg-white hover:text-black">
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
      {/* menu bar */}
    </div>
  );
};

export default Navbar;
