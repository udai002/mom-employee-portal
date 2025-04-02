import { useState } from 'react'
import './App.css'
// import UserForm from './assets/components/UserForm'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import EmployeDetails from './pages/EmployeDetails'
import UserForm from './pages/UserForm'
import AdminPortal from './pages/AdminPortal'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/login" Component={Login} />
        <Route path="/employe-details/:id" Component={EmployeDetails} />
        <Route path="/user" Component={UserForm} />
        <Route path='/admin' Component={AdminPortal} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
