import { useContext } from 'react';
import { Link } from 'react-router-dom';
import mainContext from '../../Contexts/MainContext/MainContext';
import JunaidPic from '../../../assets/JunaidPic.jpg'
const TestCard = ({prof}) => {
  const scW = useContext(mainContext);
  return (
    <Link as={Link} to={{pathname: '/client', search: `?name=${prof.profId.name}`}} className={` w-[22rem] min-h-52 bg-slate-200 cursor-pointer rounded-md mt-4 duration-150 hover:bg-slate-100 hover:scale-105 ${scW < 800 ? '':'m-4'}`}>
      <div className={`w-full h-full flex flex-col p-[2px]`}>
        <div className='flex-1 flex'>
          <div className='flex-1 flex flex-col'>
            <div className='h-6 bg-[#F5F5F5] w-full'>
              <h1 className='text-emerald-400 font-bold font-serif w-fit px-3'>6+ YOP</h1>
            </div>
            <div className='flex-1 flex bg-[#F5F5F5]'>
              <div className='flex-[2_2_0%] flex flex-row items-end px-1'>
                <img src={JunaidPic} className='w-[120px] h-[120px] rounded-full border-slate-400 border '></img>
              </div>
              <div className='flex-[3_3_0%] flex flex-col'>
                <div className='p-2'>
                  <h1 className=' font-serif text-xl'>{prof.profId.name}</h1>
                  <h1 className='text-emerald-400 font-semibold font-serif text-sm'>{prof.profId.field}</h1>
                </div>
                <div className=' flex-1 pl-8'>
                  <h1 className='text-[#7A7A7A]'>India</h1>
                  <h1 className='text-[#7A7A7A]'>{prof.price}Rs</h1>
                  <h1 className='text-[#7A7A7A]'>{prof.company}, {prof.designation}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-green-300 w-full h-12 px-4 flex items-center justify-between'>
          {/* TODO: REMOVE THIS STAR RATING AND ADD A DYNAMIC RATING LIBRARY */}
          <div>
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
          </div>
          <div className='px-4 py-1 bg-slate-100 duration-300 hover:scale-105 hover:bg-blue-400 hover:text-white'>Profile</div>
        </div>
      </div>
    </Link>
  );
};

export default TestCard;
