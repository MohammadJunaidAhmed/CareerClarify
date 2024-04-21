import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useContext, useEffect } from "react";
import loginContext from "../Contexts/LoginContext";
import {useNavigate} from "react-router-dom";

const Layout = () => {
  const {isLoggedIn} = useContext(loginContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/signin')
    }
  })
  return (
    <div className="h-fit min-h-screen w-screen flex overflow-auto">
        <div className="w-full flex-1 flex">
            <Sidebar/>
            <section className="flex-1">
                <Outlet/>
            </section>

        </div>
    </div>
  )
}

export default Layout