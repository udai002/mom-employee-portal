
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const LeaveForm = () => {
  const [formData, setFormData] = useState({
    reason: '',
    from: '',
    to: '',
    LeaveType: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form Data:", formData)

    const apiurl =` ${import.meta.env.VITE_BACKEND_URL}/api/leave/apply`
    const options = {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify({ formData })
    }
    const response = await fetch(apiurl, options)

    if (response.ok) {
      console.log("Successfully posted data to backend")
    } else {
      console.log("Unable to post data to backend")
    }
  }

  return (
   
   <>
   <Navbar/>
    <div className="flex justify-center items-center min-h-screen  p-6">
     
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <p className="text-2xl font-bold text-center text-[#00a99d] mb-6">
           Leave form
        </p>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            placeholder="Reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="border rounded-lg p-3  h-24 text-center"
          />

           <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-sm text-black">From</label>
              <input
                type="date"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="border rounded-lg p-2 "
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm text-black">To</label>
              <input
                type="date"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="border rounded-lg p-2 "
              />
            </div>
          </div>

          <select
            name="LeaveType"
            value={formData.LeaveType}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>

          <button
            type="submit"
            className="bg-[#3f9b9564] text-white py-3 rounded-lg font-semibold  hover:bg-[#00a99d] "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
   </>
  )
}

export default LeaveForm