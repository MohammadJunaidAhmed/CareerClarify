import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import loginContext from "../Contexts/Login/LoginContext";


const Layout = () => {
  const {isClick} = useContext(loginContext);
  return (
    <div className={`h-screen w-screen flex flex-col`}>
      <div id="overlay" className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 ${isClick?'':'hidden'}`}></div>
        <NavBar/>
        <section className="flex-1 flex flex-col">
            <Outlet/>
        </section>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout