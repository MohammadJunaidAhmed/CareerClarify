import HomeSearch from "./HomeSearch/HomeSearch";
import BusinessImg from "../../assets/Business.png";
import WhyUs from "./WhyUs/WhyUs";
import HeroBanner from "./Banners/HeroBanner/HeroBanner";
import HomeNavbar from "./HomeNavbar/HomeNavbar";
import HomeReviewCard from "./HomeReviewCard/HomeReviewCard.jsx";
import Footer from "../Footer/Footer"

const TestHome = () => {
  return (
    <div className="text-white w-screen min-h-screen flex flex-col">
      <HomeNavbar/>
      <HeroBanner/>
      <WhyUs/>
      <HomeReviewCard/>
      <Footer/>
    </div>
  );
};

export default TestHome;
