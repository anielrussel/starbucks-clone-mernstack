import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { ImUsers } from "react-icons/im";
import { Link } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  return (
    <div>
      <div className="bg-green-900 fixed h-screen w-[300px] left-0 text-white p-8">
        <div>
          {/* profile section */}
          <span className="flex gap-4 items-center text-2xl font-open-sans font-bold border-b border-gray-100 pb-10">
            <p className="p-1 border border-white rounded-full">
              <AiOutlineUser size={50} />
            </p>
            User
          </span>
          {/* profile section */}

          {/* menu section */}
          <div className="flex flex-col gap-10 py-8">
            <Link
              to="/admin"
              className="flex items-center font-semibold text-md gap-4"
            >
              <MdDashboardCustomize size={30} /> Dashboard
            </Link>
            <Link
              to="/newproduct"
              className="flex items-center font-semibold text-md gap-4"
            >
              <BsDatabaseFillAdd size={30} /> Add Product
            </Link>
            <Link
              to="/users"
              className="flex items-center font-semibold text-md gap-4"
            >
              <ImUsers size={30} /> Users
            </Link>
          </div>
          {/* profile section */}

          <div>
            <Link to={"/"} className="flex items-center gap-4 mt-[350px]">
              <FiLogOut size={25} />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
