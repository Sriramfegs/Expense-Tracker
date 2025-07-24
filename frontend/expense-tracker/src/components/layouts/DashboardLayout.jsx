import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  console.log("DashboardLayout user:", user);

  return (
    <div className="">
      <Navbar activeMenu={activeMenu} />

      {user ? (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow mx-5">{children}</div>
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-500">
          
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
