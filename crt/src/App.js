import logo from './logo.svg';
import './App.css';

import Hod_Edit from './components/Hod/Hod_Edit/Hod_Edit';
import Approval_New_Account from './components/Approval_Data/Approval_New_Account/Approval_Account';
import Approval_Lesson_Plan from './components/Approval_Data/Approval_Lesson_Plan/Approval_Lesson';
import Subject_view from './components/Faculty/Faculty_Subject_view/Subject_view';
import Lesson_plan from './components/Faculty/Faculty_lesson_plan/Lesson_plan';
import Approval from './components/Faculty/Faculty_Approval/Approval';
import Create_Faculty from './components/Faculty/Create_Faculty/create_faculty';
import Edit_Faculty from './components/Faculty/Edit_Faculty/edit_faculty';
import Create_Subject from './components/Subjects/Create_Subject/create_subject';
import Edit_Subject from './components/Subjects/Edit_Subject/edit_subject';
<<<<<<< HEAD

import Faculty_Profile from './components/Faculty/Faculty_Profile/Faculty_Profile';
import Faculty_Profile_Student_View from './components/Faculty/Faculty_Profile_Student_View/Faculty_Profile_Stu_View';


=======
import Faculty_Profilel from './components/Faculty/Faculty_Profile/Faculty_Profile';
>>>>>>> f29e01c905606beb44d13c767d6d254d12a1a4e1
import Hod_Home from './components/Hod/Hod_Home/Hod_Home';
import Forgot_Pass from './components/Hod/Forgot_Pass/Forgot_Pass';
import Verify from './components/Hod/Verify/Verify';
import { BrowserRouter as Router,Routes , Route, BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';


function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/Hodedit" element={<Hod_Edit/>} />
        


        <Route path="/approval_account" element={<Approval_New_Account/>} />
        <Route path="/approval_lesson" element={<Approval_Lesson_Plan/>} />
        <Route path="/faculty_profile" element={<Faculty_Profile/>} />
        <Route path="/faculty_profile_stu_view" element={<Faculty_Profile_Student_View/>} />


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
      
       
=======
        <Route path="/Hod/edit" element={<Hod_Edit/>} />
        <Route path="/Hod/approval_account" element={<Approval_New_Account/>} />
        <Route path="/Hod/approval_lesson" element={<Approval_Lesson_Plan/>} />
        <Route path="/faculty_profile" element={<Faculty_Profilel/>} />
        <Route path="/Hodhome" element={<Hod_Home/>} />
        <Route path="/verify_Password" element={<Verify/>} />
        <Route path="/forgot_Password" element={<Forgot_Pass/>} />
        <Route path="/Hod/Subject_view" element={<Subject_view/>} />
        <Route path="/Hod/Lesson_plan" element={<Lesson_plan/>} />
        <Route path="/Hod/Approval" element={<Approval/>} />
        {/* <Route path="/Create_Faculty" element={<Create_Faculty/>}/> */}
        <Route path="/Hod/Edit_Faculty" element={<Edit_Faculty/>}/>
        <Route path="/Hod/Create_Subject" element={<Create_Subject/>}/>
        <Route path="/Hod/Edit_Subject" element={<Edit_Subject/>}/>
>>>>>>> f29e01c905606beb44d13c767d6d254d12a1a4e1
      </Routes>
    </Router>
  );
}

export default App;
