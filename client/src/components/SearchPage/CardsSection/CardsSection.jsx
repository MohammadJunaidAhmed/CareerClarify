import { useContext , useState, useEffect} from "react";
import Card from "../Card/Card"
import { useLocation } from 'react-router-dom';
import mainContext from "../../Contexts/MainContext/MainContext";
import TestCard from "../Card/TestCard";

const CardsSection = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const {scW} = useContext(mainContext);
  // const profs = ['Junaid', 'Ahmed', 'Mohammad', 'Khan','Steve','John','Yahya', 'A','B','C','D','E','F','G','H','I','J']
  // const profs = ['Junaid']
  const [profs, setProfs] = useState([]);
  useEffect(()=>{ //THIS FETCHES ALL PROFESSIONALS! FETCH THIS ONLY IF QUERY IS NULL!
    fetch(`http://localhost:3000/api/v1/exp/${query}`)
      .then(response => response.json())
      .then(json => {setProfs(json)})
      .catch(error => console.error(error));
  }, [query])


  // useEffect(()=>{ //THIS FETCHES ALL PROFESSIONALS! FETCH THIS ONLY IF QUERY IS NULL!
  //   fetch(`http://localhost:3000/api/v1/prof/`)
  //     .then(response => response.json())
  //     .then(json => {setProfs(json)})
  //     .catch(error => console.error(error));
  // }, [])

  // console.log(profs)
  return (
    <div className={`flex-1 min-h-[50vh] ${scW < 600 ? 'pl-1 w-full':'w-full pr-10'}`}>
        {/* <div className={`w-fit mt-3 ${scW < 600? 'ml-6 ':'ml-10'}`}>
            <h1 className={`text-white p-3 rounded-xl bg-slate-400`}>Results for {query}: </h1>
        </div> */}
        {/* CARDS */}
        <div className={`flex flex-wrap justify-start gap-14 ${scW < 600 ? 'justify-center':''}`}>
          {
            profs.map((prof)=>{
              // console.log(prof);
              return <TestCard key={prof._id} prof={prof}/>
              // return <Card key={prof._id}/>
            })
          }
        </div>
    </div>
  )
}

export default CardsSection