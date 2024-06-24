import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboar'
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [sidebarOpen, setSidebarOpen ] = useState(false);
  console.log(sidebarOpen)
  return (
    <Router>
      <div className='App-layout'>
        <Sidebar sidebarOpen ={sidebarOpen} setSidebarOpen = {setSidebarOpen} ></Sidebar>
        <Dashboard sidebarOpen = {sidebarOpen}></Dashboard>
      </div>
    </Router>
  )
}

export default App
