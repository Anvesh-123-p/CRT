import React from 'react';
import styles from './Class_view.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgprofile from '../../../assests/profileimg.svg';
import {Link} from 'react-router-dom';


const Class_View = () => {
  return (
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
          <Link to="/Hod/Class_View" className={`nav-link ${styles.nav_link}`} style={{ fontWeight: 'bold' }}>Classes</Link>
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
        <img src={imgprofile} alt="Profile Image" className="dropdown-toggle profile-img" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" />
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
          <Link to="/faculty_profile"><li><span className="dropdown-item ">Profile</span></li></Link>
          <Link to="/Edit_Faculty"><li><span className="dropdown-item">Edit Profile</span></li></Link>
          <li><span className="dropdown-item">Logout</span></li>
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
