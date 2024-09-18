import React from 'react';
import styles from './Hod_Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgprofile from '../../../assests/profileimg.svg';

const Hod_Home = () => {
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
                                <a className={`nav-link ${styles.nav_link}`} aria-current="page" style={{ fontWeight: 'bold' }}>Home</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#">Classes</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#">Faculty</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#">Subjects</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#" >Approval</a>
                            </li>
                        </ul>
                        <div className={`dropdown ms-auto ${styles.dropdown}`}>
                            <img src={imgprofile} alt="Profile Image" className={`dropdown-toggle ${styles.profile_img}`} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className={`dropdown-menu dropdown-menu-end ${styles.dropdown_menu}`} aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={styles.cardcontainer}>
                <div className={styles.card}>
                    <div className={styles.card_body}>
                        <div className={styles.card_content}>
                            <h2 className={styles.card_title}>Faculty</h2>
                            <div className={styles.faculties_container}>
                                <div className={styles.faculty_item}>
                                    <h5>Faculty</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Doctorates</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Non Doctorates</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                            </div>
                            <div className={styles.status_container}>
                                <label>Pending:</label>
                                <p>Some description about the pending status goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_body}>
                        <div className={styles.card_content}>
                            <h2 className={styles.card_title}>Approvals</h2>
                            <div className={styles.faculties_container}>
                                <div className={styles.faculty_item}>
                                    <h5>Total Request Pending</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Student Accounts</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Lesson Plan Approvals</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                            </div>
                            <div className={styles.status_container}>
                                <label>Pending:</label>
                                <p>Some description about the pending status goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_body}>
                        <div className={styles.card_content}>
                            <h2 className={styles.card_title}>Classes</h2>
                            <div className={styles.faculties_container}>
                                <div className={styles.faculty_item}>
                                    <h5>Year</h5>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Section</h5>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Details</h5>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                            </div>
                            <div className={styles.status_container}>
                                <label>Pending:</label>
                                <p>Some description about the pending status goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_body}>
                        <div className={styles.card_content}>
                            <h2 className={styles.card_title}>Alerts</h2>
                            <div className={styles.faculties_container}>
                                <div className={styles.faculty_item}>
                                    <h5>Faculty</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Subject</h5>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                                <div className={styles.faculty_item}>
                                    <h5>Details</h5>
                                    <div className={styles.faculty_value}>120</div>
                                    <div className={styles.faculty_value}>120</div>
                                </div>
                            </div>
                            <div className={styles.status_container}>
                                <label>Pending:</label>
                                <p>Some description about the pending status goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hod_Home;
