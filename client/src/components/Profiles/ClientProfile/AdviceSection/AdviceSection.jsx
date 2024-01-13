import { useContext } from "react"
import mainContext from "../../../Contexts/MainContext/MainContext"

const AdviceSection = () => {
  const {scW} = useContext(mainContext);
  return (
    <div className={`min-h-[30vh] h-fit w-full mt-3 ${scW<600?'pl-5':''}`}>
        <h1 className=" text-xl text-white py-3 border-b-2 border-gray-800 font-bold">What I can advise on: </h1>
        <div className="h-full w-full text-xl font-light text-gray-400 space-y-3 py-3 mt-3">
            <h1>Grow your business </h1>
            <h1>Help you gain new skills </h1>
            <h1>Kick start your career </h1>
            <h1>Show you an Road-Map</h1>
        </div>
    </div>
  )
}

export default AdviceSection