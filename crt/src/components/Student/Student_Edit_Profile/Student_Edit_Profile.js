import React from "react";
import styles from './Student_Edit_Profile.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import imgprofile from '../../../assests/profileimg.svg';

const Student_Edit_Profile = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${styles.navbar1}`}>
                <div className="container-fluid">
                    <button className={`navbar-toggler ${styles.navbar_toggler1}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles.collapse1}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_nav1}`}>
                            <li className={`nav-item ${styles.nav_item1}`}>
                                <a className={`nav-link ${styles.nav_link1}`} aria-current="page" href="#">Home</a>
                            </li>
<li className={`nav-item ${styles.nav_item1}`}>
                                <a className={`nav-link ${styles.nav_link1}`} href="#" >Subjects</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item1}`}>
                                <a className={`nav-link ${styles.nav_link1}`} href="#">Faculty</a>
                            </li>
                        </ul>
                        <div className="dropdown ms-auto">
                            <img src={imgprofile} alt="Profile Image" className={`dropdown-toggle profile-img ${styles.profile_img1}`} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`container ${styles.formContainer1}`}>
                <form>
                    <div className="row g-3">
                        <h1>Edit Profile</h1>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputName" className={`form-label ${styles.formLabel1}`}>Name</label>
                                <input type="text" className={`form-control ${styles.formControl1}`} id="exampleInputName" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputQualification" className={`form-label ${styles.formLabel1}`}>Password</label>
                                <input type="text" className={`form-control ${styles.formControl1}`} id="exampleInputQualification" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputDepartment" className={`form-label ${styles.formLabel1}`}>College Name</label>
                                <select id="exampleInputDepartment" className={`form-select ${styles.formControl1}`}>
                                    <option defaultValue>Choose...</option>
                                    <option value="1">Department 1</option>
                                    <option value="2">Department 2</option>
                                    <option value="3">Department 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputDepartment" className={`form-label ${styles.formLabel1}`}>ClassID</label>
                                <select id="exampleInputDepartment" className={`form-select ${styles.formControl1}`}>
                                    <option defaultValue>Choose...</option>
                                    <option value="1">Department 1</option>
                                    <option value="2">Department 2</option>
                                    <option value="3">Department 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputContactNumber" className={`form-label ${styles.formLabel1}`}>Email</label>
                                <input type="text" className={`form-control ${styles.formControl1}`} id="exampleInputContactNumber" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputSpecialization" className={`form-label ${styles.formLabel1}`}>Graduation Year</label>
                                <input type="text" className={`form-control ${styles.formControl1}`} id="exampleInputSpecialization" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputPassword" className={`form-label ${styles.formLabel1}`}>Contact Number</label>
                                <input type="password" className={`form-control ${styles.formControl1}`} id="exampleInputPassword" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputCollegeName" className={`form-label ${styles.formLabel1}`}>Gender</label>
                                <select id="exampleInputCollegeName" className={`form-select ${styles.formControl1}`}>
                                    <option defaultValue>Choose...</option>
                                    <option value="1">College 1</option>
                                    <option value="2">College 2</option>
                                    <option value="3">College 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputDesignation" className={`form-label ${styles.formLabel1}`}>Roll Number</label>
                                <input type="text" className={`form-control ${styles.formControl1}`} id="exampleInputDesignation" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow1}`}>
                                <label htmlFor="exampleInputProfilePhoto" className={`form-label ${styles.formLabel1}`}>Profile photo</label>
                                <input type="file" className={`form-control ${styles.formControl1}`} id="exampleInputProfilePhoto" accept="image/*" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonGroup1}>
                        <button type="button" className={`btn btn-outline-secondary ${styles.btnCancel1}`}>Cancel</button>
                        <button type="button" className={`btn btn-primary ${styles.btnPrimary1}`}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Student_Edit_Profile;
