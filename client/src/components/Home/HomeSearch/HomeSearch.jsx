import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import mainContext from "../../Contexts/MainContext/MainContext";



const HomeSearch = () => {
  const [query, setQuery] = useState('');
  const {scW} = useContext(mainContext);
  const {visible, setVisible} = useContext(mainContext);
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    setVisible(true);
    navigate(`/search?query=${query}`)
  }
  return (
    <div className={`bg-white p-1 rounded-lg z-50 ${scW < 600 ? 'w-full' : 'w-2/3'}`}>
        <div className={`flex-[4_4_0%] flex justify-center items-center`}>
          <form onSubmit={handleSubmit} className={`flex-1 bg-white h-10 rounded-md flex ${!visible?' outline outline-orange-400':''}`}>
            <input 
            type="text" className="flex-1 rounded-md px-5 focus:outline-none text-black font-bold font-mono" 
            placeholder={`Search for items`} 
            onClick={()=>setVisible(false)} 
            onBlur={()=>setVisible(true)}
            value={query}
            onChange={(e)=>setQuery(e.target.value)}>
            </input>
            <button type="submit" className="w-10 bg-yellow-300 h-10 ml-auto rounded-e-md flex justify-center items-center hover:fill-orange-500">
              <svg className="scale-125 duration-150 ease-linear" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              {/* TODO: ADD SEARCH CLIP-ART HERE */}
            </button>
          </form>
        </div>
    </div>
  )
}

// HomeSearch.propTypes = {
//   //PROP-VALIDATION
//   visible: PropTypes.bool.isRequired,
//   setVisible: PropTypes.func.isRequired
// };

export default HomeSearch