import { useContext } from "react"
import mainContext from "../../../Contexts/MainContext/MainContext"

const AboutSection = () => {
  const {scW} = useContext(mainContext);
  return (
    <div className={`flex flex-col ${scW<600?'pl-5':'p-2'}`}>
        <h1 className=" text-slate-200 text-2xl font-bold"><span className="">About Me</span></h1>
        <div className="flex-1 flex">
            <div className="flex-[5_5_0%]">
                <p className=" text-gray-400 mr-10 duration-100 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam voluptatibus vero est fuga soluta, illo aspernatur exercitationem cumque ducimus eveniet, neque ullam libero dolorum necessitatibus eligendi minus possimus. Aliquam, cum minima. Quia quo eius placeat explicabo voluptatibus est dignissimos aspernatur quae itaque nesciunt sapiente sed doloremque porro enim atque voluptate necessitatibus officiis, dolorum suscipit. Similique architecto esse saepe quas?</p>
            </div>
            <div className={`flex-[1_1_0%] ${scW<600?'hidden':''}`}></div>
        </div>
    </div>
  )
}

export default AboutSection