import { useContext, useEffect, useRef } from "react";
import AboutSection from "./AboutSection/AboutSection";
import AdviceSection from "./AdviceSection/AdviceSection";
import BookingSection from "./BookingSection/BookingSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import TitleSection from "./TitleSection/TitleSection";
import mainContext from "../../Contexts/MainContext/MainContext";
import AudioPage from "../../Requests/AudioRequest/AudioPage";
import VideoPage from "../../Requests/VideoRequest/VideoPage";

const ClientProfile = () => {
  const {scW} = useContext(mainContext);
  const {isAudioWindow, isVideoWindow} = useContext(mainContext);
  const ref = useRef(null);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {

    // Ensure that the effect runs after the component has mounted
    scrollToTop();

    // Additionally, you can use a listener to handle potential scroll changes
    const handleScroll = () => {
      scrollToTop();
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`flex-1 flex justify-center pt-4 pb-10 bg-[#111827] ${scW<800?'flex-col':''}`} ref={ref} onClick={()=>{scrollToTop()}}>
      {
        scW<700 ? 
        <div className={`h-full flex ${scW < 800?'w-[95vw] flex-col':'w-[85vw]'}`}>
        <div className="flex flex-col ">
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
          <div className={`sticky top-10`}>
            <BookingSection/>
            <AdviceSection/>
          </div>
        </div>
      </div>
      }
      <div className={`w-1/3 h-1/3 bg-slate-300 fixed top-1/4 bg-opacity-100 opacity-100 rounded-xl ${isAudioWindow || isVideoWindow ? '' : 'hidden'}`}>
        {
          isAudioWindow && <AudioPage/> 
          ||
          isVideoWindow && <VideoPage/>
        }
        {/* <AudioPage/> */}
      </div>
      
    </div>
  );
};

export default ClientProfile;
