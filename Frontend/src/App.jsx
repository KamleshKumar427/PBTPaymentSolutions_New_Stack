import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboar'
import Sidebar from './Components/Sidebar/Sidebar';


function App() {

  return (
    <div className='App-layout'>
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
