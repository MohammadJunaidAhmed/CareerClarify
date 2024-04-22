import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import loginContext from "../Contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Home/SearchBar/SearchBar";
import NavElements from "../Home/NavElements/NavElements";
import mainContext from "../Contexts/MainContext";

const Layout = () => {
  const { isLoggedIn } = useContext(loginContext);
  const { activePage } = useContext(mainContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  });
  return (
    <div className="h-fit min-h-screen w-screen flex">
      <div className="w-full flex-1 flex absolute">
        <Sidebar />
        <section className="flex-1 flex flex-col">
          <div className=" h-[90px] w-full bg-[#F5F5F5] shadow-sm flex justify-between px-7 py-2 sticky top-0 z-[100]">
            <div className=" flex items-center text-xl font-serif">
              {/* TODO: MAKE THIS FONT APPEALING!  */}
              <div className="">
                {
                  activePage == '1' && <h1>Home</h1>
                  ||
                  activePage == '2' && <h1>Order</h1>
                  ||
                  activePage == '3' && <h1>My Services</h1>
                  ||
                  activePage == '4' && <h1>Analytics</h1>
                  ||
                  activePage == '5' && <h1>Settings</h1>
                }
              </div>
            </div>
            <SearchBar />
            <NavElements />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
