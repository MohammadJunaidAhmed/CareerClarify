import { useContext } from 'react'
import JunaidPic from '../../../../assets/JunaidPic.jpg'
import mainContext from '../../../Contexts/MainContext/MainContext'
const TitleSection = (props) => {
   const {scW} = useContext(mainContext);
  return (
    <div className="h-fit w-full flex p-3 mb-4">
        <div className="flex flex-1">
            <div className={` overflow-hidden rounded-xl ${scW<800?'w-1/2 h-full':'h-80 w-60'}`}>
                <img src={JunaidPic} className=' rounded-xl object-cover h-80 w-60 transition-transform duration-200 hover:scale-105'></img>
            </div>
            <div className=' w-1/3 flex flex-col'>
                <div className='flex-[1_1_0%] flex items-end p-3'>
                    {/* <h1 className=' text-2xl font-serif italic break-normal text-slate-200'>Mohammad Junaid Ahmed</h1> */}
                    <h1 className=' text-2xl font-serif italic break-normal text-slate-200'>{props.name}</h1>
                </div>
                <div className='flex-[4_4_0%] p-3 break-normal text-gray-400'>
                    <p className=''>Student at VIT-AP University. Well versed at Full-Stack Development.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TitleSection