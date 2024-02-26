import { useContext } from "react"
import ExperienceCompany from "./ExperienceCompany/ExperienceCompany"
import mainContext from "../../../Contexts/MainContext/MainContext"

const ExperienceSection = () => {
    const {scW} = useContext(mainContext);
  return (
    <div className={`flex-1 flex flex-col p-2 ${scW<600?'pl-5':''}`}>
        <h1 className=" text-slate-200 text-2xl font-bold"><span className="">Experience</span></h1>
        <div className="flex-1 flex mt-3">
            <div className="flex-[5_5_0%]  flex pr-2 pt-2 py-2">
                <div className="flex-1">
                    <ExperienceCompany/>
                    <ExperienceCompany/>
                    <ExperienceCompany/>
                </div>
                <div className="flex-1  border-l-2 border-black pl-4">
                    <ExperienceCompany/>
                    <ExperienceCompany/>
                </div>
            </div>
            {/* This is useless section! Just kept for spacing! */}
            <div className={`flex-[1_1_0%] ${scW<600?'hidden':''}`}></div>
        </div>
    </div>
  )
}

export default ExperienceSection