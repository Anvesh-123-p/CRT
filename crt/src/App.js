import logo from './logo.svg';
import './App.css';
import Hod_Edit from './components/Hod/Hod_Edit/Hod_Edit';
import Subject_view from './components/Faculty/Faculty_Subject_view/Subject_view';
import Lesson_plan from './components/Faculty/Faculty_lesson_plan/Lesson_plan';
import Approval from './components/Faculty/Faculty_Approval/Approval';
import Hod_Home from './components/Hod/Hod_Home/Hod_Home';
import Forgot_Pass from './components/Hod/Forgot_Pass/Forgot_Pass';
import Verify from './components/Hod/Verify/Verify';
import { BrowserRouter as Router,Routes , Route, BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Hodedit" element={<Hod_Edit/>} />
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
