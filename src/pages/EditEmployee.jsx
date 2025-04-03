import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext, useUser } from '../context/UserContext';
import { Oval } from 'react-loader-spinner'
import { useParams } from 'react-router-dom';

const apistatusList = {
  initial: "INITIAL",
  inProgess: "INPROGESS",
  sucess: "SUCCESS",
  failure: "FAILURE"
}
const EditEmployee = () => {
  const dataNow = new Date().toISOString().split("T")[0]
  const [selectedDateData, setSelectedDate] = useState(dataNow);
  const [apiStatus, setApiStatus] = useState(apistatusList.initial)
  const [employeeDetails, setEmployeeDetails] = useState(null)

  const [techincalDesc, setTechincalDesc] = useState("")
    const [nonTechincalDesc, setNonTechincalDesc] = useState("")
    const [review, setReview] = useState("")
    const [extraCurricular, setExtraCarricural] = useState("")
    const [events, setEvents] = useState("")
    const [posted_linkedin, setPosted_linkedin] = useState("true")
    const [reason, setReason] = useState("")
    const [innovativeIdea, setInnovativeIdea] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [isEdit , setIsEdit] = useState(false)
  
    const [isEditable , setIsEditable] = useState(false)
    const [employeeId , setEmployeeId] = useState(null)

  const handleDateChange = (date) => {
    date.setDate(date.getDate() + 1)
    const dateSet = new Date(date)
    setSelectedDate(dateSet);
  };

  // const dateFormate = new Date(selectedDateData).toISOString().split("T")[0]



  const fetchLearning = async () => {
    console.log(user)
    setApiStatus(apistatusList.inProgess)
    if (user) {
      console.log("this is running")
      const dateFormate = new Date(selectedDateData).toISOString().split("T")[0]
      const response = await fetch(`http://localhost:3000/api/emplyee/${user.userId}/${dateFormate}`)
      console.log(dateFormate)
      if (response.ok) {
        setApiStatus(apistatusList.sucess)
        const data = await response.json()
        setEmployeeDetails(data)
      } else {
        setEmployeeDetails(null)
        setApiStatus(apistatusList.failure)
      }
    }
  }

  



  const onSuccess = () => {
    const { events,
      extraCarricular,
      nonTechnicalDesc,
      posted_linkedin,
      review,
      technicalDesc } = employeeDetails
    return <>  <div className="md:w-1/2 w-full  bg-gray-50 p-6 rounded-lg shadow-lg">
           

    <div>
    
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
         
        </div>
      </label>
    </div>

   <form className="flex flex-col gap-6">
    {/* Technical Description */}
    <div>
      <label
        htmlFor="techDescription"
        className="block font-semibold text-lg text-gray-800"
      >
        Technical Description{" "}


      </label>
      <textarea
        id="techDescription"
        className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 hover:bg-white transition"
        value={techincalDesc}
        onChange={e => setTechincalDesc(e.target.value)}
      />
    </div>

    {/* Non-Technical Description */}
    <div>
      <label
        htmlFor="nonTechDescription"
        className="block font-semibold text-lg text-gray-800"
      >
        Non-Technical Description{" "}
        <span className="text-sm text-gray-500">(minimum 30 words)</span>
      </label>
      <textarea
        id="nonTechDescription"
        className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 hover:bg-white transition"
        value={nonTechincalDesc}
        onChange={e => setNonTechincalDesc(e.target.value)}
      />

    </div>

    {/* Review or Suggestion */}
    <div>
      <label
        htmlFor="reviewOrSuggestion"
        className="block font-semibold text-lg text-gray-800"
      >
        Review / Complaint / Suggestion
      </label>
      <textarea
        id="reviewOrSuggestion"
        className="w-full p-3 h-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 hover:bg-white transition"
        value={review}
        onChange={e => setReview(e.target.value)}
      />
    </div>

      {/* {/Innovative Idea/} */}
      <div>
      <label
        className="block font-semibold text-lg text-gray-800"
        htmlFor="ExtraCurricular"
      >
        Innovative Idea
      </label>
      <textarea
        id="ExtraCurricular"
        className="w-full p-3 h-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 hover:bg-white transition"
        value={innovativeIdea}
        onChange={e => setInnovativeIdea(e.target.value)}

      />
    </div>

    {/* {/Extra Carricular Activities/} */}
    <div>
      <label
        className="block font-semibold text-lg text-gray-800"
        htmlFor="ExtraCurricular"
      >
        Yoga / Exercise / Book Reading
      </label>
      <textarea
        id="ExtraCurricular"
        className="w-full p-3 h-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 hover:bg-white transition"
        value={extraCurricular}
        onChange={e => setExtraCarricural(e.target.value)}

      />
    </div>

    {/* {/Events Section/} */}
    <div>
      <label
        className="block font-semibold text-lg text-gray-800"
        htmlFor="Events"
      >
        Did you found any interesting events ?<br />
        <p className="text-sm font-light text-gray-700">If any kindly drop link here</p>
      </label>
      <textarea
        id="Events"
        className="w-full p-3 h-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 hover:bg-white transition"
        value={events}
        onChange={e => setEvents(e.target.value)}
      />
    </div>

    {/* LinkedIn Post Section */}
    <div>
      <label className="block font-semibold text-lg text-gray-800">
        Posted on LinkedIn?
      </label>
      <div className="flex items-center gap-4 mt-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="linkedinPost"
            value="true"
            checked={posted_linkedin === "true"}
            onChange={e => setPosted_linkedin(e.target.value)}
          />
          Yes
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="linkedinPost"
            value="false"
            checked={posted_linkedin === "false"}
            onChange={e => { setPosted_linkedin(e.target.value) }}
          />
          No
        </label>
      </div>
    </div>

     {/* Update Button */}
      <button type='submit'
      className="bg-red-400 px-4 py-1 rounded-md"
    >
      Update
    </button>
  </form>
  )
</div>
    </>

  }

  const { user } = useUser();

  useEffect(() => {
    fetchLearning()
  }, [user, selectedDateData])



  return (
    <div>
        <div className='px-10 py-4 bg-amber-300'>
        <h1 className='font-bold'>Squart</h1>
        </div>
      <div className='flex gap-10 items-start p-5 ml-8 mt-5'>
        <div className=' '>
          <h1 className='font-bold'>Search Calender</h1>
          <Calendar className='px-2 py-2 border-2  border-gray-300 rounded-lg w-[300px] ' selected={selectedDateData} onChange={handleDateChange} />
        </div>
        <div className='p-4  min-h-screen w-full border-l-2 border-gray-200 '>
          {apiStatus === apistatusList.failure && <h1 className='font-semibold'>No Data Available</h1>}
          {employeeDetails && onSuccess()}
          {apiStatus === apistatusList.inProgess && <div className="flex justify-center mt-40"><Oval color='#00a99d' /></div>}
        </div>
      </div>
    </div>
  )
}

export default EditEmployee
