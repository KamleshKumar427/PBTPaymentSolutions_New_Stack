import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboar'
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen)
  return (
    <Router>
      <div style={{display:"flex", flexDirection: "column"}}>
        <Navbar></Navbar>
        <div className='App-layout'>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} ></Sidebar>
          <Dashboard sidebarOpen={sidebarOpen}></Dashboard>
        </div>
      </div>
    </Router>
  )
}

export default App
