import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [activePage, setActivePage] = useState('1');
  return (
    <div className='h-screen w-28 bg-neutral-950 flex'>
      <div className='flex-1 flex flex-col gap-16 pt-[10vh]'>
        <Link><div className={`w-full h-20 bg-white flex items-center justify-center cursor-pointer ${activePage === '1' ? 'bg-blue-600' : ''}`} id='1' onClick={()=>{setActivePage('1')}}>ABC</div></Link>
        <Link><div className={`w-full h-20 bg-white flex items-center justify-center cursor-pointer ${activePage === '2' ? 'bg-blue-600' : ''}`} id='2' onClick={()=>{setActivePage('2')}}>ABC</div></Link>
        <Link><div className={`w-full h-20 bg-white flex items-center justify-center cursor-pointer ${activePage === '3' ? 'bg-blue-600' : ''}`} id='3' onClick={()=>{setActivePage('3')}}>ABC</div></Link>
        <Link><div className={`w-full h-20 bg-white flex items-center justify-center cursor-pointer ${activePage === '4' ? 'bg-blue-600' : ''}`} id='4' onClick={()=>{setActivePage('4')}}>ABC</div></Link>
      </div>
    </div>
  )
}

export default Sidebar