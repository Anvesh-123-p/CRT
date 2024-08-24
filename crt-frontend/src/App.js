import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration/Registration';
import Student_view_Lesson_plan from './components/Student_view_Lesson_plan/Student_view_Lesson_Plan'
import { BrowserRouter as Router,Routes , Route, BrowserRouter } from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Registration/>} />
        <Route path="/Login" element={<Registration/>} />
        <Route path="/Student_View_Lesson_Plan" element={<Student_view_Lesson_plan/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
