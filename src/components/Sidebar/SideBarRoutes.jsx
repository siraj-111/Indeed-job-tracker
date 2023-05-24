import React from 'react'
import SideBar from './SideBar'
import {Routes, 
  Route
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import DashBaordPage from '../Pages/DashboardPage/DashBaordPage';
import QuestionPage from '../Pages/QuestionPage';
import JobPage from '../Pages/JobPage';




function SideBarRoutes() {
  return (
    <>
        <Routes>
            {/* <Route  path="/login"  element={<Login/>}></Route> */}
        </Routes> 
        <SideBar>
          <Navbar/>
          <Routes>
              <Route path="/" element={<DashBaordPage/>}/>
              <Route path="/questionpage" element={<QuestionPage/>}/>
              <Route path="/jobpage" element={<JobPage/>}/>


          </Routes>
        </SideBar>
    </>
  )
}
export default SideBarRoutes