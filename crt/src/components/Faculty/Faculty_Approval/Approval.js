import React from "react";
import styles from './Approval.module.css';  
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgprofile from '../../../assests/profileimg.svg'; 
const Approval = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                <div className="container-fluid">
                    <button className={`navbar-toggler ${styles.navbar_toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles.collapse}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_nav}`}>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#">Classes</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#">Faculty</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#" >Subjects</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#" style={{ fontWeight: 'bold' }}>Approval</a>
                            </li>
                        </ul>
                        <div className="dropdown ms-auto">
                            <img src={imgprofile} alt="Profile Image" className={`dropdown-toggle profile-img ${styles.profile_img}`} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className={`d-flex search ${styles.search}`} role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <table class={`table table-hover ${styles.table}`}>
                <thead>
                    <tr>
                        <th scope="col">Approval Type</th>
                        <th scope="col">ID</th>
                        <th scope="col">Old Data</th>
                        <th scope="col">New Data</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col">New Account</td>
                        <td scope="col">majshdd@gmail.com</td>
                        <td scope="col">---</td>
                        <td scope="col"><a href="#">view</a></td>
                        <td scope="col"><a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16" color="green">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg></a>
                            <a> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" color="red">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg></a></td>
                    </tr>
                    <tr>
                        <td scope="col">New Account</td>
                        <td scope="col">majshdd@gmail.com</td>
                        <td scope="col">---</td>
                        <td scope="col"><a href="#">view</a></td>
                        <td scope="col"><a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16" color="green">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg></a>
                            <a> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" color="red">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg></a></td>

                    </tr>
                    <tr>
                        <td scope="col">Lesson plan</td>
                        <td scope="col">majshdd@gmail.com</td>
                        <td scope="col">---</td>
                        <td scope="col"><a href="#">view</a></td>
                        <td scope="col"><a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16" color="green">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg></a>
                            <a> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" color="red">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg></a></td>
                            </tr>
                            <tr>
                        <td scope="col">Edit_profile</td>
                        <td scope="col">majshdd@gmail.com</td>
                        <td scope="col"><a href="#">view</a></td>
                        <td scope="col"><a href="#">view</a></td>
                        <td scope="col"><a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16" color="green">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg></a>
                            <a> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" color="red">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg></a></td>
                            </tr>
                    </tbody>
            </table>
       <div className={styles.page}>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center mt-4">
                        <li class="page-item disabled">
                            <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>

                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
);
};

export default Approval;