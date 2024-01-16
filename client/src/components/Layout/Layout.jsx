/* eslint-disable no-unused-vars */
import { Outlet, useSearchParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useContext, useState } from "react";
import loginContext from "../Contexts/Login/LoginContext";
import mainContext from "../Contexts/MainContext/MainContext";


const Layout = () => {
  const {isClick} = useContext(loginContext);
  const {isAccountOverLayComponentVisible,setAccountOverLayVisibility} = useContext(mainContext);
  const {isMouseOnAccount, setMouseOnAccount} = useContext(mainContext);
  const {isMouseOnAccountOverLay, setIsMouseOnAccountOverlay} = useContext(mainContext);

  return (
    <div className={`h-screen w-screen flex flex-col overflow-auto`}>
      <div id="overlay" className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 ${isClick?'':'hidden'}`}></div>
        <NavBar/>
        <section className="flex-1 flex flex-col">
          {
            isAccountOverLayComponentVisible && (
              <div id="overLayAccount" 
                className={`bg-slate-400 z-50 w-96 h-96 fixed right-0 mr-5 duration-150 cursor-pointer ${isAccountOverLayComponentVisible?'':'hidden'}`}
                onMouseOver={()=>{setIsMouseOnAccountOverlay(true);console.log("ON OVERLAY")}}
                onMouseLeave={()=>{setIsMouseOnAccountOverlay(false); setAccountOverLayVisibility(false); console.log("LEAVING OVERLAY")}}
              >
              </div>
            )
          }
          <Outlet/>
        </section>
        <Footer/>
    </div>
  )
}

export default Layout