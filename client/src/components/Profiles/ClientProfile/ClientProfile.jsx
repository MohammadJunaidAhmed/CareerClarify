import { useContext } from "react";
import AboutSection from "./AboutSection/AboutSection";
import AdviceSection from "./AdviceSection/AdviceSection";
import BookingSection from "./BookingSection/BookingSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import TitleSection from "./TitleSection/TitleSection";
import mainContext from "../../Contexts/MainContext/MainContext";

const ClientProfile = () => {
  const {scW} = useContext(mainContext);
  return (
    <div className={`flex-1 flex justify-center pt-4 bg-[#111827] ${scW<800?'flex-col':''}`}>
      {
        scW<700 ? 
        <div className={`h-full flex ${scW < 800?'w-[95vw] flex-col':'w-[85vw]'}`}>
        <div className="flex flex-col">
          <TitleSection/>
          <BookingSection/>
          <AboutSection/>
          <ExperienceSection/>
        </div>
        <div className="flex-[1_1_0%]">
          <div className={`sticky top-0`}>
            <BookingSection/>
            <AdviceSection/>
          </div>
        </div>
      </div>
      :
      <div className={`h-full flex ${scW < 800?'w-[95vw]':'w-[85vw]'}`}>
        <div className="flex-[2_2_0%] flex flex-col">
          <TitleSection/>
          <AboutSection/>
          <ExperienceSection/>
        </div>
        <div className="flex-[1_1_0%]">
          <div className={`sticky top-5`}>
            <BookingSection/>
            <AdviceSection/>
          </div>
        </div>
      </div>
      }
      
    </div>
  );
};

export default ClientProfile;
