import logo from './logo.svg';
import './App.css';
import Hod_Edit from './components/Hod/Hod_Edit/Hod_Edit';

import Approval_New_Account from './components/Approval_Data/Approval_New_Account/Approval_Account';
import Approval_Lesson_Plan from './components/Approval_Data/Approval_Lesson_Plan/Approval_Lesson';
import Subject_view from './components/Faculty/Faculty_Subject_view/Subject_view';
import Lesson_plan from './components/Faculty/Faculty_lesson_plan/Lesson_plan';
import Approval from './components/Faculty/Faculty_Approval/Approval';

import Faculty_Profilel from './components/Faculty/Faculty_Profile/Faculty_Profile';


import Hod_Home from './components/Hod/Hod_Home/Hod_Home';
import Forgot_Pass from './components/Hod/Forgot_Pass/Forgot_Pass';
import Verify from './components/Hod/Verify/Verify';
import { BrowserRouter as Router,Routes , Route, BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Hodedit" element={<Hod_Edit/>} />


        <Route path="/approval_account" element={<Approval_New_Account/>} />
        <Route path="/approval_lesson" element={<Approval_Lesson_Plan/>} />
        <Route path="/faculty_profile" element={<Faculty_Profilel/>} />


        <Route path="/Hodhome" element={<Hod_Home/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/forgot" element={<Forgot_Pass/>} />
        <Route path="/Subject_view" element={<Subject_view/>} />
        <Route path="/Lesson_plan" element={<Lesson_plan/>} />
        <Route path="/Approval" element={<Approval/>} />

      </Routes>
    </Router>
  );
}

export default App;
