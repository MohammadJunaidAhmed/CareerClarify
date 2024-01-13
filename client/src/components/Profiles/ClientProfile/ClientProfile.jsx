import AboutSection from "./AboutSection/AboutSection";
import AdviceSection from "./AdviceSection/AdviceSection";
import BookingSection from "./BookingSection/BookingSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import TitleSection from "./TitleSection/TitleSection";

const ClientProfile = () => {
  return (
    <div className="flex-1 flex justify-center pt-4 bg-[#111827]">
      <div className="h-full w-[85vw] flex">
        <div className="flex-[2_2_0%] flex flex-col">
          <TitleSection/>
          <AboutSection/>
          <ExperienceSection/>
        </div>
        <div className="flex-[1_1_0%]">
          <div className="sticky top-0 pl-[5vw]">
            <BookingSection/>
            <AdviceSection/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
