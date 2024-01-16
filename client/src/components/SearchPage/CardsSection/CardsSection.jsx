import { useContext } from "react";
import Card from "../Card/Card"
import { useLocation } from 'react-router-dom';
import mainContext from "../../Contexts/MainContext/MainContext";

const CardsSection = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const {scW} = useContext(mainContext);
  const profs = ['Junaid', 'Ahmed', 'Mohammad', 'Khan','','','']
  // const profs = ['Junaid']
  return (
    <div className={`flex-1 ${scW < 540 ? 'pl-1 w-full':'pl-16 w-full'}`}>
        <div className={`w-fit mt-3 ${scW < 600? 'ml-6 ':'ml-10'}`}>
            <h1 className={`text-white p-3 rounded-xl bg-slate-400`}>Results for {query}: </h1>
        </div>
        {/* CARDS */}
        <div className={`flex flex-wrap justify-items-start items-center ${scW < 540 ? 'justify-center':''}`}>
          {
            profs.map((key)=>{
              return <Card key={key}/>
            })
          }
        </div>
    </div>
  )
}

export default CardsSection