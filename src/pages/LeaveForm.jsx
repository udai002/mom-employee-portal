import React, { use, useState } from 'react'

const LeaveForm = () => {
const [formData,setformData]=useState({
    reason:'',
    from:'',
    to:'',
    LeaveType:''
})

   function  handleChange(e){
   const {name,value}=e.target
   setformData(prev=>({
    ...prev,
    [name]:value
   }))
}
const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log("this is the form data",formData.reason,formData.from,formData.to,"this is the leave type",formData.LeaveType); 
    const apiurl=`${import.meta.env.VITE_BACKEND_URL}/api/leave/apply`;
    const options={
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify({formData})
    }
    const response=await fetch(apiurl,options)
    if(response){
      console.log("successfully posted the data to the backend");      
    }
    else{
      console.log("unable to post the data to the backend");    
    }
}
  return (
    <>
    <div className=' flex justify-center items-center mt-15'>
    <div className='border-1 w-80 justify-center items-center p-4'>
    <div className=' flex  flex-col items-center '>
       <p>Leave Form</p>
        <div className='flex flex-col w-50 gap-10 '>
        <input type="text" placeholder='reason'  name="reason"value={formData.reason} onChange={handleChange} className='border-1 rounded h-20'/>
        <input type="date"  className='border-1 rounded' name="from" value={formData.from} onChange={handleChange}/>
        <input type="date" className='border-1 rounded' name="to" value={formData.to} onChange={handleChange}/>
        <select className='border-1 rounded ' name="LeaveType" onChange={handleChange} value={formData.LeaveType}> 
            <option value="">Leave Type</option>
            <option value="sick Leave">Sick Leave</option>
            <option value="Personal">Personal</option>  
            <option value="Others">Others</option>
        </select>
        <input type="button" value="submit" className='border-1 rounded' onClick={handleSubmit}/>
    </div>
    </div>
   
    </div>
    </div>
    </>
  )
}

export default LeaveForm