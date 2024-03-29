import UseCase from "./UseCase/UseCase"

const WhyUs = ({isClick, setIsClick}) => {
  return (
    <div className={`w-full h-2/3 p-2 mt-4 ${isClick ? ' text-slate-400':''}`}>
        <h1 className="text-2xl font-bold font-mono ">Why CareerClarify?</h1>
        <div>
        <div className="flex-1 flex mt-3">
            <div className="flex-[5_5_0%]  flex pr-2 pt-2 py-2">
                <div className="flex-1">
                    <UseCase/>
                    <UseCase/>
                </div>
                <div className="flex-1  border-l-2 border-black pl-4">
                    <UseCase/>
                    <UseCase/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WhyUs