import React from "react";
import styles from './Hod_Edit.module.css';
import 'bootstrap/dist/css/bootstrap.css';

const Hod_Edit = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${styles.navlink}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Faculty</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Subjects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Approvals</a>
                            </li>
                        </ul>

                        <div className="dropdown">
                            <a 
                                href="#" 
                                className="d-block" 
                                id="profileDropdown" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <img 
                                    src="E:/analysis/hod/profileimg.svg" 
                                    alt="Profile Image" 
                                    className={styles.profileImage}
                                />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`container ${styles.formContainer}`}>
                <form>
                    <div className="row g-3">
                        <h1>Edit Profile</h1>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputName" className={`form-label ${styles.formLabel}`}>Name</label>
                                <input type="text" className={`form-control ${styles.formControl}`} id="exampleInputName" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputQualification" className={`form-label ${styles.formLabel}`}>Qualification</label>
                                <input type="text" className={`form-control ${styles.formControl}`} id="exampleInputQualification" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputEmail" className={`form-label ${styles.formLabel}`}>Email address</label>
                                <input type="email" className={`form-control ${styles.formControl}`} id="exampleInputEmail" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputDepartment" className={`form-label ${styles.formLabel}`}>Department</label>
                                <select id="exampleInputDepartment" className={`form-select ${styles.formControl}`}>
                                    <option defaultValue>Choose...</option>
                                    <option value="1">Department 1</option>
                                    <option value="2">Department 2</option>
                                    <option value="3">Department 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputContactNumber" className={`form-label ${styles.formLabel}`}>Contact Number</label>
                                <input type="text" className={`form-control ${styles.formControl}`} id="exampleInputContactNumber" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputSpecialization" className={`form-label ${styles.formLabel}`}>Specialization</label>
                                <input type="text" className={`form-control ${styles.formControl}`} id="exampleInputSpecialization" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputPassword" className={`form-label ${styles.formLabel}`}>Password</label>
                                <input type="password" className={`form-control ${styles.formControl}`} id="exampleInputPassword" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputCollegeName" className={`form-label ${styles.formLabel}`}>College Name</label>
                                <select id="exampleInputCollegeName" className={`form-select ${styles.formControl}`}>
                                    <option defaultValue>Choose...</option>
                                    <option value="1">College 1</option>
                                    <option value="2">College 2</option>
                                    <option value="3">College 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputDesignation" className={`form-label ${styles.formLabel}`}>Designation</label>
                                <input type="text" className={`form-control ${styles.formControl}`} id="exampleInputDesignation" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-row ${styles.formRow}`}>
                                <label htmlFor="exampleInputProfilePhoto" className={`form-label ${styles.formLabel}`}>Profile photo</label>
                                <input type="file" className={`form-control ${styles.formControl}`} id="exampleInputProfilePhoto" accept="image/*" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="button" className={`btn btn-outline-secondary ${styles.btnCancel}`}>Cancel</button>
                        <button type="button" className={`btn btn-primary ${styles.btnPrimary}`}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hod_Edit;
