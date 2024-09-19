import React from 'react';
import styles from './Faculty_View.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgprofile from '../../../assests/profileimg.svg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Faculty_View = () => {
  return (
    <div>
      {/* First Navbar */}
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
                <a className={`nav-link ${styles.nav_link}`} href="#" style={{ fontWeight: 'bold' }}>Faculty</a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a className={`nav-link ${styles.nav_link}`} href="#">Subjects</a>
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

      {/* Second Navbar */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex search" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button className={styles.create_button}>Create New Faculty</button>
        </div>
      </nav>

      {/* Table Section */}
      <div className="container mt-4">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Faculty</th>
              <th>Subjects Handling</th>
              <th>Mobile</th>
              <th>View</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row data */}
            <tr>
              <td>John Doe</td>
              <td>Mathematics</td>
              <td>+123456789</td>
              <td>
                <i className="fas fa-eye" style={{ cursor: 'pointer', color: '#007bff' }}></i> {/* Eye Icon */}
              </td>
              <td>
                <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i> {/* Trash Bin Icon */}
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Physics</td>
              <td>+987654321</td>
              <td>
                <i className="fas fa-eye" style={{ cursor: 'pointer', color: '#007bff' }}></i> {/* Eye Icon */}
              </td>
              <td>
                <i className="fas fa-pencil-alt" style={{ cursor: 'pointer', color: '#28a745', marginRight: '10px' }}></i> {/* Pencil Icon */}
                <i className="fas fa-trash-alt" style={{ cursor: 'pointer', color: '#dc3545' }}></i> {/* Trash Bin Icon */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Faculty_View;
