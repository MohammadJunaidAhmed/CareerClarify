import { useContext } from 'react';
import { Link } from 'react-router-dom';
import mainContext from '../../Contexts/MainContext/MainContext';
import JunaidPic from '../../../assets/JunaidPic.jpg'
const Card = () => {
  const scW = useContext(mainContext);
  return (
    <Link as={Link} to="/client" className={`h-64 w-48 bg-slate-200 cursor-pointer rounded-md mt-4 duration-150 hover:bg-slate-100 hover:scale-105 ${scW < 800 ? '':'m-4'}`}>
      <div className={`w-full h-full flex flex-col p-2`}>
        <div className="flex-[6_6_0%] flex items-center justify-center relative">
          <div className="bg-[#7d7a7a] w-28 h-28 rounded-full">
            {/* TODO: PUT IMAGE HERE */}
            <img src={JunaidPic} className='w-full h-full rounded-full border-slate-400 border'></img>
          </div>
          <div className="absolute h-14 w-14 bg-green-300 top-2 right-3 rounded-full opacity-60 flex items-center justify-center">
            <h1 className="font-bold font-serif">
              4.5🌟 {/*TODO: PUT RATING HERE*/}
            </h1>
          </div>
        </div>
        <div className="flex-[4_4_0%] flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <h1 className=" text-xl font-serif">Vice President</h1>
          </div>
          <div className="flex-1 p-2 flex">
            <div className="bg-gray-300 flex-1 rounded-md flex items-center">
              {/* TODO: MAKE THIS AS A BUTTON */}
              <h1 className="p-1">200Rs</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
