import { useContext } from "react"
import mainContext from "../Contexts/MainContext/MainContext";

const Footer = () => {
  const {scW} = useContext(mainContext);
  return (
    <div className={`w-screen pt-10 border-t-[1px] h-fit pb-3 border-slate-300 bg-[#111827] flex justify-center ${scW < 600 ? 'p-1' : 'p-3'}`}>
      <div className={`flex flex-wrap p-2 gap-2 ${scW < 600 ? 'w-full' : 'w-4/5'}`}>
        <div className="flex-1 flex flex-col mb-5 px-2">
          <div className="w-full">
            <h1 className="text-xl font-serif text-slate-400 font-bold">Get Connected</h1>
          </div>
          <div className="flex-1 pt-4">
            <h1 className="text-slate-200 text-base py-1 font-mono">Connectivity</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Dashboard</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Forums</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Queries</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col mb-5 px-2">
          <div className="w-full">
            <h1 className="text-xl font-serif text-slate-400 font-bold">Pricing</h1>
          </div>
          <div className="flex-1 pt-4">
            <h1 className="text-slate-200 text-base py-1 font-mono">Pricing Overview</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Strategy</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Enterprise</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col mb-5 px-2">
          <div className="w-full">
            <h1 className="text-xl font-serif text-slate-400 font-bold">Developers</h1>
          </div>
          <div className="flex-1 pt-4">
            <h1 className="text-slate-200 text-base py-1 font-mono">Forum</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Projects</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Open Source</h1>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full">
              <h1 className="text-xl font-serif text-slate-400 font-bold">Company</h1>
          </div>
          <div className="flex-1 pt-4">
            <h1 className="text-slate-200 text-base py-1 font-mono">Twitter</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Facebook</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Linkedin</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono"></h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col mb-5 px-2">
          <div className="w-full">
            <h1 className="text-xl font-serif text-slate-400 font-bold">Social</h1>
          </div>
          <div className="flex-1 pt-4">
            <h1 className="text-slate-200 text-base py-1 font-mono">Twitter</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Facebook</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Linkedin</h1>
            <h1 className="text-slate-200 text-base py-1 font-mono">Instagram</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer