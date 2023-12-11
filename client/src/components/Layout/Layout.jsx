import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
        <NavBar/>
        <section className="flex-1 flex flex-col">
            <Outlet/>
        </section>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout