import { useContext, useState } from "react";
import mainContext from "../Contexts/MainContext/MainContext.jsx";

const TestHome = () => {
  const{visible, setVisible} = useContext(mainContext);
  return (
    <div className="text-white bg-[#1d3362] w-screen min-h-screen flex flex-col gap-10">
      {
        !visible &&
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"></div>
      }
    </div>
  );
};

export default TestHome;
