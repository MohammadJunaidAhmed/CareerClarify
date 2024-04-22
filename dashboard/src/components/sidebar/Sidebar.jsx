import { useContext } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../Contexts/MainContext';

const Sidebar = () => {
  // const [activePage, setActivePage] = useState('1');
  const {activePage, setActivePage} = useContext(mainContext);
  return (
    <div className='h-screen w-[12vw] p-1 bg-[#0D2C32] flex flex-col sticky top-0'>
      <div className='w-full h-20 flex px-3 py-2 justify-start items-end border-slate-500 border-b-[1px]'>
        <h1 className='text-xl text-slate-300'>Career Clarify</h1>
      </div>
      <div className='flex-1 flex flex-col gap-4 pt-[3vh]'>
        <Link to={'/'}><div className={`w-full p-2 text-slate-300 text-lg rounded-lg flex items-center justify-center cursor-pointer ${activePage === '1' ? 'bg-[#7A7A7A]' : ''}`} id='1' onClick={(e)=>{setActivePage(e.target.id)}}>Home</div></Link>
        <Link to={'/orders'}><div className={`w-full p-2 text-slate-300 text-lg rounded-lg flex items-center justify-center cursor-pointer ${activePage === '2' ? 'bg-[#7A7A7A]' : ''}`} id='2' onClick={(e)=>{setActivePage(e.target.id)}}>Orders</div></Link>
        <Link to={'/myservices'}><div className={`w-full p-2 text-slate-300 text-lg rounded-lg flex items-center justify-center cursor-pointer ${activePage === '3' ? 'bg-[#7A7A7A]' : ''}`} id='3' onClick={(e)=>{setActivePage(e.target.id)}}>My services</div></Link>
        <Link to={'/page2'}><div className={`w-full p-2 text-slate-300 text-lg rounded-lg flex items-center justify-center cursor-pointer ${activePage === '4' ? 'bg-[#7A7A7A]' : ''}`} id='4' onClick={(e)=>{setActivePage(e.target.id)}}>Analytics</div></Link>
        <Link to={'/page1'}><div className={`w-full p-2 text-slate-300 text-lg rounded-lg flex items-center justify-center cursor-pointer ${activePage === '5' ? 'bg-[#7A7A7A]' : ''}`} id='5' onClick={(e)=>{setActivePage(e.target.id)}}>Settings</div></Link>
      </div>
    </div>
  )
}

export default Sidebar