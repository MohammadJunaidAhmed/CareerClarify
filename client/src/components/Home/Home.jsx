import { useContext, useState } from 'react'
import BusinessImg from '../../assets/Business.png'
import HomeSearch from './HomeSearch/HomeSearch'
import WhyUs from './WhyUs/WhyUs'
import mainContext from '../Contexts/MainContext/MainContext'

const Home = () => {
  const [isClick, setIsClick] = useState(false);
  const {scW} = useContext(mainContext);
  return (
    <div className="text-white w-screen h-screen bg-[#1d3362] flex">
      <div className={`w-screen h-screen bg-slate-500 fixed opacity-75 z-10 ${isClick? '':'hidden'}`}></div>
      <div className={`flex-[3_3_0%] flex flex-col ${scW < 600 ? 'px-4' : 'px-10'}` }>
        <div className={`flex-[1_1_0%] flex py-4 items-end `}>
          <div className='w-full'>
            <h1 className={`font-bold font-serif ${scW < 600 ? 'text-4xl pl-1':'text-6xl'}`}>CareerClarify</h1>
            <p className={`text-slate-300 w-3/4 p-2 text-xl ${scW < 540 ? 'text-3xl' : 'text-4xl'}`}>Connections? Mentors? Helpers? Seniors? Anything else?.. <span className='text-slate-200 text-2xl font-serif'> We have it!</span></p>
          </div>
        </div>
        <div className='flex-[3_3_0%] z-10'>
          <HomeSearch isClick={isClick} setIsClick={setIsClick}/>
          <WhyUs isClick={isClick} setIsClick={setIsClick}/>
        </div>
      </div>
      {
        scW < 640
        ? 
        <div className=''> </div>
        : 
        <div className='flex-[2_2_0%] bg-yellow-400 flex flex-col'>
          <div className='flex-1 flex items-center p-2'>
            <img src={BusinessImg} className='w-1/2'></img>
          </div>
          <div className=' flex-1'></div>
        </div>
      }
    </div>
  )
}

export default Home