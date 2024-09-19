import React from 'react';
import styles from './Class_view.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgprofile from '../../../assests/profileimg.svg';


const Class_View = () => {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`  }>
                <div className="container-fluid">
                    <button className={`navbar-toggler ${styles.navbar_toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles.collapse}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbar_nav }`}>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#" style={{ fontWeight: 'bold' }}>Classes</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#" >Faculty</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#" >Subjects</a>
                            </li>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <a className={`nav-link ${styles.nav_link}`} href="#">Approval</a>
                            </li>
                        </ul>
                        <div className="dropdown ms-auto">
                            <img src={imgprofile} alt="Profile Image" className="dropdown-toggle profile-img" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
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
                    <form className="d-flex search" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className={styles.create_button}>Create class</button>
                </div>
            </nav>
            <div className={styles.tablecontainer}>
        <table className={`table table-hover table-bordered ${styles.tablebordered}`}>
          <thead className="table-dark">
            <tr>
              <th>Class Name</th>
              <th>Teacher</th>
              <th>Semester</th>
              <th>Section</th>
              <th>Students Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
            <tr>
            <td>Einstein Class</td>
                    <td>Anvesh Reddy</td>
                    <td>2</td>
                    <td>A</td>
                    <td>45</td>

              <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    );
};

export default Class_View;
