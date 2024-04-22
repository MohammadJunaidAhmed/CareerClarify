import { useContext, useState } from "react";
import mainContext from "../../../../Contexts/MainContext/MainContext";
import PropTypes from "prop-types";

const BookingButton = ({ txt, type }) => {
  const [hvr, setHvr] = useState(false);
  const { scW } = useContext(mainContext);

  const { setIsAudioWindow, setIsVideoWindow} = useContext(mainContext);
  return (
    <div className="mt-5 mb-5" onClick={type == "Audio" ? ()=>{setIsAudioWindow(true); console.log("Audio Clicked")} : 
                                        ()=>{console.log("Coming Soon!")}}>
      <button
        className={`${
          scW < 1000 ? "w-full bg-slate-400" : "w-3/4"
        } h-[5vh] bg-cyan-400 rounded-xl ease-in-out group duration-100 transform relative flex items-center`}
        onMouseOver={() => setHvr(true)}
        onMouseLeave={() => setHvr(false)}
      >
        <div className={`bg-gray-500 w-full h-full fixed rounded-xl ${hvr?'bg-gradient-to-r from-yellow-500 via-emerald-400 to-emerald-500':'hidden'}`}></div>
        <h1 className={`flex-1 relative font-mono ${hvr?'':''}`}>{type !== 'Audio' ? `${txt}` :`${txt}`}</h1>
        <div className={`w-1/2 relative px-5 py-2 font-medium text-white group ${hvr?'cursor-pointer':''}`} onMouseOver={()=>setHvr(true)} onMouseOut={()=>setHvr(false)}>
          <span className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12`}></span>
          <span className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out transform -translate-x-0 skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12`}></span>
          <span className="transition-opacity duration-300 ease-in-out">
            <span className="relative">
              {
                hvr? <span className=" opacity-100">{type !== 'Audio' ? 'Coming Soon' : ` Buy Now!`}</span>: <span className="opacity-75">{type !== 'Audio' ? 'Coming Soon' : `From 200Rs`}</span>
              }
            </span>
          </span>
        </div>
      </button>
    </div>
  );
};

BookingButton.propTypes = {
  //PROP-VALIDATION
  txt: PropTypes.string.isRequired,
};

export default BookingButton;