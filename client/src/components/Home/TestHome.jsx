import HomeSearch from "./HomeSearch/HomeSearch";
import BusinessImg from "../../assets/Business.png";
import WhyUs from "./WhyUs/WhyUs";

const TestHome = () => {
  return (
    <div className="text-white w-screen min-h-screen flex flex-col">
      <div className="w-full h-[70vh] bg-slate-600 flex">
        <div className="text-white w-screen h-full flex">
          <div className="flex-[3_3_0%] flex flex-col">
            <div className="flex-[1_1_0%] flex px-10 py-4 items-end">
              <div className="w-full">
                <h1 className="font-bold font-serif text-6xl">CareerClarify</h1>
                <p className="text-slate-300 w-3/4 p-2 text-xl">
                  Connections? Mentors? Helpers? Seniors? Anything else?..{" "}
                  <span className="text-slate-200 text-2xl font-serif">
                    {" "}
                    We have it!
                  </span>
                </p>
              </div>
            </div>
            <div className="flex-[3_3_0%] px-10">
              <HomeSearch />
              <WhyUs />
            </div>
          </div>
          <div className="flex-[2_2_0%] flex flex-col">
            <div className="flex-1 flex items-center p-2 ml-10">
              <img src={BusinessImg} className="w-1/2"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-900">
        <h1>Hellor</h1>
      </div>
    </div>
  );
};

export default TestHome;
