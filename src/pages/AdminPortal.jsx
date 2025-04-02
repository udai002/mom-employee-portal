import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'
import EntryForm from '../components/EntryForm'
import CustomeLoader from '../components/CustomeLoader'

const apiStatusList = {
  initial: "INITIAL",
  inProgess: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

const AdminPortal = () => {

  const [teammate, setTeammate] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusList.initial)
  const [activeDeleteId, setActiveDeleteId] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    getUsers()
  }, [])


  //user created
  const getUsers = async () => {
    console.log("this is running")
    setApiStatus(apiStatusList.inProgess)

    const option = {
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbGVsZTEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3NDM0MTc4NDZ9.-YEG-oCMCaYjDzWBSnmtags83RxH27RvCN9XVaOOK9g"
      }
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, option)
    console.log(response)
    if (response.ok) {
      setApiStatus(apiStatusList.success)
      const data = await response.json()
      setTeammate(data.data)
    } else {
      setApiStatus(apiStatusList.failure)
    }

  }

  //delete user
  const deleteUser = async(id)=>{
    const options = {
      method:"DELETE",
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbGVsZTEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3NDM0MTc4NDZ9.-YEG-oCMCaYjDzWBSnmtags83RxH27RvCN9XVaOOK9g"
      }
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`  ,options)
    console.log(response)
    const updatedTeammates = teammate.filter(item=>item._id!=id)
    setTeammate(updatedTeammates)
    setActiveDeleteId(null)
  }


  const OnFailure = () => {
    return <div className='h-[80vh] w-full flex justify-center'>
      <div>
        <h1 className='text-6xl text-gray-400 font-bold text-center mt-56 mb-3'>404</h1>
        <h1 className='font-bold text-3xl text-gray-400 text-center'>The servers are getting their medicine. Please check back in a bit!</h1>
      </div>
    </div>
  }

  const filteredTeammates = teammate.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase()) // Filter based on search
  );

  const onSuccess = () => {
    return <>{openModal && <EntryForm setOpenModal={setOpenModal} teammate={teammate} setTeammate={setTeammate} />}
      {activeDeleteId && <div className='fixed w-full h-screen top-0 flex justify-center items-center bg-black/75'>
        <div className='bg-white p-10 rounded-lg'>
          <h1 className='font-semibold '>Are your sure? want to delete the user.</h1>
          <div className='flex justify-around mt-5'>
            <button className='bg-red-400 px-4 py-1 rounded-md'  onClick={()=>deleteUser(activeDeleteId)}>Yes</button>
            <button className='bg-green-400 px-4 py-1 rounded-md' onClick={() => setActiveDeleteId(null)}>No</button>
          </div>
        </div>
      </div>}
      <div>
        <h1 className='font-bold text-2xl text-center mt-5'>Hi There, Here is your team</h1>
        <button className='absolute right-10 bg-green-300 px-4 py-2 rounded-xl font-semibold' onClick={() => setOpenModal(true)}>Add Employee</button>
      </div>
      <div className='flex flex-row flex-wrap p-20'>
        {filteredTeammates.map(item => <UserCard id={item._id} setActiveDeleteId={setActiveDeleteId} key={item._id} name={item.username} gender={item.gender} />)}
      </div>
    </>
  }

  const renderFunction = () => {
    switch (apiStatus) {
      case apiStatusList.inProgess:
        return <CustomeLoader />
      case apiStatusList.success:
        return onSuccess()
      case apiStatusList.failure:
        return OnFailure()
    }
  }



  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      {renderFunction()}
    </div>
  )
}

export default AdminPortal
