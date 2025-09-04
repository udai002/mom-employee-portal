import { useState } from 'react'
import './App.css'
// import UserForm from './assets/components/UserForm'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import EmployeDetails from './pages/EmployeDetails'
import UserForm from './pages/UserForm'
import AdminPortal from './pages/AdminPortal'
import {UserProvider} from './context/UserContext'
import ProtectedRoute from './components/protectedRoute.'
import EditEmployee from './pages/EditEmployee'
import LeaveForm from './pages/LeaveForm'


function App() {

  const token = localStorage.getItem("jwt_token")

  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={AdminPortal} />
        <Route path="/employe-details/:id" Component={EmployeDetails} />
        <Route path="/user" Component={UserForm} />
        <Route path='/admin' Component={AdminPortal} />
        <Route path='/editEmployee' Component={EditEmployee} />
        <Route path='/leaveform' Component={LeaveForm}/>
      </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
