import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Faculty_Profile.module.css';
import Profile from '../../../assests/profileimg.svg';
import {Link} from 'react-router-dom';


const Faculty_Profile = () => {
  return (
    <div>
       <div>
      <nav className={`navbar navbar-expand-lg ${styles.nav_bar}`  }>
  <div className="container-fluid">
    <button className={`navbar-toggler ${styles.navbar_toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${styles.collapse}`} id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_nav}`}>
        <li className={`nav-item ${styles.nav_item}`}>
          <Link to="/hodhome" className={`nav-link ${styles.nav_link}`} aria-current="page">Home</Link>
        </li>
        <li className={`nav-item ${styles.nav_item}`}>
          <Link to="/Hod/Class_View" className={`nav-link ${styles.nav_link}`}>Classes</Link>
        </li>
        <li className={`nav-item ${styles.nav_item}`}>
          <Link to="/Hod/Faculty_View" className={`nav-link ${styles.nav_link}`}>Faculty</Link>
        </li>
        <li className={`nav-item ${styles.nav_item}`}>
          <Link to="/Subject_view" className={`nav-link ${styles.nav_link}`}>Subjects</Link>
        </li>
        <li className={`nav-item ${styles.nav_item}`}>
          <Link to="/Approval" className={`nav-link ${styles.nav_link}`}>Approval</Link>
        </li>
      </ul>
      <div className="dropdown ms-auto">
        <img src={Profile} alt="Profile Image" className="dropdown-toggle profile-img" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
          <Link to="/faculty_profile"><li><span className="dropdown-item ">Profile</span></li></Link>
          <Link to="/Edit_Faculty"><li><span className="dropdown-item">Edit Profile</span></li></Link>
          <li><span className="dropdown-item">Logout</span></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

        </div>
   
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4 col-12 mb-3">
                    <div className={`card ${styles.card1}`}>
                        <img src={Profile} className="card-img-top" alt="profile" />
                        <div className="card-body">
                            <h5 className="card-title"><strong>P. Anvesh Reddy</strong></h5>
                            <p className="card-text"><strong>Associate Professor</strong></p>
                        </div>
                    </div>
                </div>
                                 
                <div className="col-lg-8 col-12">
                    <div className="table-container">
                        <table className={`table table-bordered ${styles.table_above}`}>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>1023</td>
                                </tr>
                                <tr>
                                    <th>Email id</th>
                                    <td>anvesh123@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Mobile</th>
                                    <td>9787671809</td>
                                </tr>
                                <tr>
                                    <th>Classes Handling</th>
                                    <td>2-CSEA, 3-ECE B</td>
                                </tr>
                                <tr>
                                    <th>Subjects Handling</th>
                                    <td>Python, VLSI</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>CSE</td>
                                </tr>
                                <tr>
                                    <th>Date Of Joining</th>
                                    <td>24/01/2024</td>
                                </tr>
                                <tr>
                                    <th>Qualification</th>
                                    <td>PHD</td>
                                </tr>
                                <tr>
                                    <th>Experience</th>
                                    <td> 3.5 Years</td>
                                </tr>
                                <tr>
                                    <th>Doctorate</th>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <table className={`table table-hover ${styles.table_below}`}>
                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                <th scope="col">Total Topics</th>
                                <th scope="col">Not Started Topics</th>
                                <th scope="col" className="text-danger">Pending Topics</th>
                                <th scope="col" className="text-success">Completed Topics</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DSA Python</td>
                                <td>100</td>
                                <td>60</td>
                                <td className="text-danger">4</td>
                                <td className="text-success">36</td>
                            </tr>
                            <tr>
                                <td>DSA Python</td>
                                <td>100</td>
                                <td>60</td>
                                <td className="text-danger">4</td>
                                <td className="text-success">36</td>
                            </tr>
                            <tr>
                                <td>DSA Python</td>
                                <td>100</td>
                                <td>60</td>
                                <td className="text-danger">4</td>
                                <td className="text-success">36</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Faculty_Profile;
