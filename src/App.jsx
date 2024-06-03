import { useState } from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/HomePage';
import StudentCourseRegistration from './pages/StudentCourseRegistration';
import Notification from './pages/Notification';

function App() {
  

  return (
    <Router>
      <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Homepage/>}/> 
    <Route path="/course" element={<StudentCourseRegistration/>}/>
    <Route  path ="/notification" element={<Notification/>}/>
    </Routes>
      </Router>
  )
}

export default App
