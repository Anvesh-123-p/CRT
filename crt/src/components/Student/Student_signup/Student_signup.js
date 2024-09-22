import React, { useState } from 'react';
import styles from './Student_signup.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import{Link} from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("");
const [mobileNumber, setMobileNumber] = useState();
const [password, setPassword] = useState("");
const [resumeLink, setresumeLink] = useState("");
const [dept,setDept]=useState("");
const [aadharNumber,setaadharNumber]=useState();
const [percentage,setPercentage]=useState();



   const navigate=useNavigate();
let url="http://127.0.0.1:8000/api/users/"
const handleSubmit=(e)=>{
  console.log(e);
  let data={
    "first_name": firstName,
    "last_name":lastName,
    "email": email,
    "gender":gender,
    "mobile_number":mobileNumber,
    "password": password,
    "resume_link":resumeLink,
    "dept":dept,
    "aadhar_number":aadharNumber,
    "percentage":percentage
    
}

  axios.post(url,data).then(
    (response)=>{
      
      setTimeout(() => {
        navigate('/login');
        }, 2000);
    }
  
  ).catch((err) => console.log(err))
  e.preventDefault();
}
  const FirstName=(e)=>{
    console.log(e)
        console.log(e.target.value)
        setFirstName(e.target.value)

  }
  const LastName=(e)=>{
    console.log(e)
        console.log(e.target.value)
        setLastName(e.target.value)

  }
  const newEmail=(e)=>{
    console.log(e)
        console.log(e.target.value)
        setEmail(e.target.value)

  }

  const MobileNumber=(e)=>{
    console.log(e)
    console.log(e.target.value)
    setMobileNumber(e.target.value)
  }

  const Percentage=(e)=>{
    console.log(e)
    console.log(e.target.value)
    setPercentage(e.target.value)
  }

  const Password=(e)=>{
    console.log(e)
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const ResumeLink=(e)=>{
    console.log(e)
    console.log(e.target.value)
    setresumeLink(e.target.value)
  }

  const aadharnumber=(e)=>{
    console.log(e)
    console.log(e.target.value)
    setaadharNumber(e.target.value)
  }

  const Department=(e)=>{
    setDept(e.target.value)
  }

  const Gender=(e)=>{
      setGender(e.target.value)
  }
  
    return(
        <div >
            <div className={styles.body}>
             <div className={styles.box}> 
                <div className={styles.image}><img src="https://cdni.iconscout.com/illustration/premium/thumb/man-working-on-his-laptop-on-the-sofa-at-home-2511605-2131717.png" alt=""/></div>
             </div>

            <div> 
                <h1>Register Yourself</h1>   
             </div>

            
             <form className="row g-2" onSubmit={(e) => {
                handleSubmit(e);
            }}>
            <div className='row g-2'>
            <div className="col-lg-3">
                <label htmlFor="inputname" className="form-label">First Name</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{FirstName(e)}} placeholder='Name' id="inputname"/>
            </div>
            <div className="col-lg-3">
                <label htmlFor="inputname" className="form-label">Last Name</label>
                <input type="text" className="form-control border border-dark" onChange={(e)=>{LastName(e)}} placeholder='Name' id="inputname"/>
            </div>
            </div>
            <div className='row g-2'>
            <div className="col-lg-3">
                <label htmlFor="inputState" className="form-label ">Department</label>
                <select id="inputState" onChange={(e)=>{Department(e)}} className="form-select border border-dark">
                <option defaultValue>Department</option>
                <option value="CSE">Computer Science</option>
                <option value="ECE">Electrical </option>
                <option value="MECH">Mechanical</option>
                <option value="CIVIL">Civil</option>
                <option value="EEE">EEE</option>
                </select>
                </div>
                
                <div className="col-lg-3">
                <label htmlFor="inputState" className="form-label ">Gender</label>
                <select id="inputState" onChange={(e)=>{Gender(e)}} className="form-select border border-dark">
                <option defaultValue>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                </select>
                </div>
                </div>

            <div >
              <label htmlFor="exampleInputEmail1"   className="form-label" >Email</label>
              <input type="email" className="form-control border border-dark" onChange={(e)=>{newEmail(e)}} placeholder="Email" id={styles.exampleInput}  aria-describedby="emailHelp"/>
            </div>
            
            <div>
              <label htmlFor="exampleInputEmail1"   className="form-label" >Mobile Number</label>
              <input type="text" className="form-control border border-dark" onChange={(e)=>{MobileNumber(e)}} placeholder='Mobile Number' id={styles.exampleInput}  aria-describedby="emailHelp"/>
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" id={styles.labels} className="form-label">Percentage</label>
              <input type="text" className="form-control border border-dark" onChange={(e)=>{Percentage(e)}} placeholder="Percentage" id={styles.exampleInput} />
            </div>
            <div className="mb-0">
              <label htmlFor="exampleInputEmail1"   className="form-label" >Password</label>
              <input type="password" className="form-control border border-dark"  onChange={(e)=>{Password(e)}} placeholder='Password' id={styles.exampleInput}  aria-describedby="emailHelp"/>
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" id={styles.labels} className="form-label">Resume Link</label>
              <input type="text" className="form-control border border-dark"  onChange={(e)=>{ResumeLink(e)}} placeholder='Resume Link' id={styles.exampleInput} />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" id={styles.labels} className="form-label">Adhar Number</label>
              <input type="text" className="form-control border border-dark" onChange={(e)=>{aadharnumber(e)}} placeholder='Adhar Number' id={styles.exampleInput} />
            </div>
            <button type="submit"  className={`btn btn-dark ${styles.buttons}`}>Submit</button>
           
          
            </form>
            </div>
        </div>
    );
};

export default SignUp;