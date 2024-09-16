import logo from './logo.svg';
import './App.css';
import Hod_Edit from './components/Hod/Hod_Edit/Hod_Edit';
import Subject_view from './components/Faculty/Faculty_Subject_view/Subject_view';
import Lesson_plan from './components/Faculty/Faculty_lesson_plan/Lesson_plan';
import Approval from './components/Faculty/Faculty_Approval/Approval';
import Create_Faculty from './components/Faculty/Create_Faculty/create_faculty';
import Edit_Faculty from './components/Faculty/Edit_Faculty/edit_faculty';
import Create_Subject from './components/Subjects/Create_Subject/create_subject';
import Edit_Subject from './components/Subjects/Edit_Subject/edit_subject';
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
        <Route path="/Create_Faculty" element={<Create_Faculty/>}/>
        <Route path="/Edit_Faculty" element={<Edit_Faculty/>}/>
        <Route path="/Create_Subject" element={<Create_Subject/>}/>
        <Route path="/Edit_Subject" element={<Edit_Subject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
