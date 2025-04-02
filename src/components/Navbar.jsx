
import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({search, setSearch}) => {
  
  return (
    <div>
      <div className='p-4 px-6 flex  justify-between bg-[#00a99d]'>
        <h1 className='font-bold text-white'>MOM Pharmcay Employment Portal</h1>
        <div className='flex items-center'>
            <div className='flex mr-4'>
              <input type='text' className='mr-4 rounded-md bg-red-200' value = {search} placeholder='search..' onChange={(e)=>setSearch(e.target.value)} />
            <FaUserCircle className='text-2xl' /> <span className='ml-2 text-black font-bold'>udai</span>
            </div>
            <button className='bg-red-400 px-4 py-1 rounded-md'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
