import { Outlet, useSearchParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
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