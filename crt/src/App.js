import logo from './logo.svg';
import './App.css';
import Hod_Edit from './components/Hod/Hod_Edit/Hod_Edit';
import Approval_New_Account from './components/Approval_Data/Approval_New_Account/Approval_New_Account';
import Approval_Lesson_Plan from './components/Approval_Data/Approval_Lesson_Plan/Approval_Lesson_Plan';
import { BrowserRouter as Router,Routes , Route, BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Hodedit" element={<Hod_Edit/>} />
        <Route path="/approval_act" element={<Approval_New_Account/>} />
        <Route path="/approval_lesson" element={<Approval_Lesson_Plan/>} />
      </Routes>
    </Router>
  );
}

export default App;
