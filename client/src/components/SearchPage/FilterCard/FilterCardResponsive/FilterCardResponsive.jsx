import { useState } from "react"


const FilterCardResponsive = () => {
    const [isDivVisible, setDivVisible] = useState(false);
    const toggleDivVisibility = () => {
        setDivVisible(!isDivVisible);
      };
  return (
    <div className=" w-full">
        <button onClick={toggleDivVisibility} className="bg-blue-500 text-white p-2 rounded-md w-16 ml-[85%] mt-4">
            &#8801;
        </button>
        <div
        className={`${
          isDivVisible ? 'block' : 'hidden'
        } h-fit w-full p-3 bg-slate-900 pr-6 mt-3 sticky top-[4rem] right-0`}
      >
        <div className="bg-white w-full h-full rounded-md p-2 overflow-y-auto flex flex-col">
          <h1 className="text-2xl p-3">Hello</h1>
          <h1 className="text-2xl p-3">Hello</h1>
          <h1 className="text-2xl p-3">Hello</h1>
          <h1 className="text-2xl p-3">Hello</h1>
          <h1 className="text-2xl p-3">Hello</h1>
          {/* Other content goes here */}
        </div>
      </div>
    </div>
  )
}

export default FilterCardResponsive