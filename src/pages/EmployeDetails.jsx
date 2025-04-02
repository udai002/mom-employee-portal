import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const EmployeDetails = () => {
    const dataNow = Date.now()
    const [selectedDateData, setSelectedDate] = useState(null);
    
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log(selectedDateData)

  return (
    <div>
      <Navbar/>
      <div className='flex gap-10 items-start p-5 ml-8 mt-5'>
      <div className=' '>
        <h1 className='font-bold'>Search Calender</h1>
        <Calendar className='px-2 py-2 border-2  border-gray-300 rounded-lg w-[300px] ' selected={selectedDateData} onChange={handleDateChange}/>
      </div>
      <div className='p-4  min-h-screen w-full border-l-2 border-gray-200 '>
        {/* <h1 className='font-semibold'>No Data Available</h1> */}
        <div className='p-3'>
          <h1 className='font-semibold mb-1'>Technical Learning</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusantium. Fuga ut placeat eligendi sapiente vitae vero repellat dolor eaque, ipsa enim perferendis quis accusantium nostrum aspernatur minus, totam deleniti.</p>
        </div>
        <div className='p-3'>
          <h1 className='font-semibold mb-1'>Non Technical Learning</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusantium. Fuga ut placeat eligendi sapiente vitae vero repellat dolor eaque, ipsa enim perferendis quis accusantium nostrum aspernatur minus, totam deleniti.</p>
        </div>
        <div className='p-3'>
          <h1 className='font-semibold mb-1'>Remark</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusantium. Fuga ut placeat eligendi sapiente vitae vero repellat dolor eaque, ipsa enim perferendis quis accusantium nostrum aspernatur minus, totam deleniti.</p>
        </div>
        <div className='p-3'>
          <h1 className='font-semibold mb-1'>Extra Curricular</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusantium. Fuga ut placeat eligendi sapiente vitae vero repellat dolor eaque, ipsa enim perferendis quis accusantium nostrum aspernatur minus, totam deleniti.</p>
        </div>
        <div className='p-3'>
          <h1 className='font-semibold mb-1'>Events</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusantium. Fuga ut placeat eligendi sapiente vitae vero repellat dolor eaque, ipsa enim perferendis quis accusantium nostrum aspernatur minus, totam deleniti.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EmployeDetails
