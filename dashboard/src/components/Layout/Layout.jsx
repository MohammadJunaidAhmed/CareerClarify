import { Outlet, useSearchParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="h-screen w-screen">
        <div className="h-full w-full flex">
            <Sidebar/>
            <section className="flex-1">
                <Outlet/>
            </section>

        </div>
    </div>
  )
}

export default Layout