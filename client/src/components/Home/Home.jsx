import HomeSearch from "./HomeSearch/HomeSearch";
import BusinessImg from "../../assets/Business.png";
import WhyUs from "./WhyUs/WhyUs";
import HeroBanner from "./Banners/HeroBanner/HeroBanner";
import HomeNavbar from "./HomeNavbar/HomeNavbar";
import HomeReviewCard from "./HomeReviewCard/HomeReviewCard.jsx";
import Footer from "../Footer/Footer"
import { useContext, useState } from "react";
import mainContext from "../Contexts/MainContext/MainContext.jsx";
import ReviewBanner from "./Banners/ReviewBanner/ReviewBanner.jsx";

const TestHome = () => {
  const{visible, setVisible} = useContext(mainContext);
  return (
    <div className="text-white bg-[#1d3362] w-screen min-h-screen flex flex-col gap-10">
      {
        !visible &&
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"></div>
      }
      <HomeNavbar/>
      <HeroBanner/>
      <WhyUs/>
      <ReviewBanner/>
      {/* <HomeReviewCard/> */}
      <Footer/>
    </div>
  );
};

export default TestHome;
