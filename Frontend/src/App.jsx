import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboar'
import Sidebar from './Components/Sidebar/Sidebar';


function App() {

  return (
    <>
      <Sidebar/>
      <Dashboard></Dashboard>
    </>
  )
}

export default App
