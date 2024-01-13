import Card from "../Card/Card"
import { useLocation } from 'react-router-dom';

const CardsSection = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  return (
    <div className={`flex-1 ml-16`}>
        <div className="w-fit ml-10 mt-3">
            <h1 className="text-white p-3 rounded-xl bg-slate-400">Results for {query}: </h1>
        </div>
        <div className=" flex flex-wrap justify-items-start items-center">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default CardsSection