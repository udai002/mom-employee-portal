import { jwtDecode } from 'jwt-decode'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username  , setUsername] = useState("")
    const [password  , setPassword] = useState("")
    const [errorMsg , setErrorMsg] = useState(false)

    const navigate = useNavigate();

    const setLoginToken = (token)=>{
      localStorage.setItem("jwt_token" , token)
      const LocalToken = localStorage.getItem("jwt_token")
      const decode = jwtDecode(LocalToken)
      if(decode.isAdmin){
        navigate('/admin')
      }else{
        navigate('/user')
      }

    }

    const loginUser = async ()=>{
      const options = {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username , password})
      }

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login` , options)
      if(response.ok){
        const data = await response.json()
        console.log(data.jwtToken)
        setLoginToken(data.jwtToken)
      }else{

      }
    }

    const handleLogin = (e)=>{
      e.preventDefault()
      if(!username || !password){
        setErrorMsg(true)
      }else{
        loginUser()
      }
    }

  return (
    <div>
      <div className='flex flex-col h-screen w-full  items-center bg-gray-200'>
        <h1 className='font-bold text-2xl mt-[100px]  md:text-2xl'>Welcome to Mom Employment Portal</h1>
        <div className='mt-10 p-10 bg-white'>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username" className='font-semibold'>Username</label> <br />
                    <input type="text" className='border-2 border-gray-200 mt-1 p-1 w-[250px] rounded-md outline-none' id='username' name='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className='mt-5'>
                    <label htmlFor="password" className='font-semibold'>Passowrd</label> <br />
                    <input type="password" id='password' className='border-2 border-gray-200 mt-1 p-1 w-[250px] rounded-md outline-none' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div>
                 {errorMsg && <p className='text-red-500 mt-3 '>All Fields are mandatory</p>} 
                    <button className='mt-6 w-full bg-[#00a99d] py-1 px-2 rounded-md' type='submit'>Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
