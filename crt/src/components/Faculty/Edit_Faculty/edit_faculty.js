
import React from 'react';
import styles from './edit_faculty.module.css';


const EditFaculty = () => {
  return (
    <div>
  <div className={styles.formcontainer}>
<div className={styles.myform}>
  <div className={styles.formgroup}>
    <label for="name">Faculty Name <span className={styles.required}>*</span></label>
    <input type="text" id="name" placeholder="faculty_name" name="name" required />
  </div>
  <div className={styles.formgroup}>
    <label for="email">Email id <span className={styles.required}>*</span></label>
    <input type="email" id="email" placeholder="email" name="email" required />
  </div>
  <div className={styles.formgroup}>
    <label for="phone">Mobile number <span className={styles.required}>*</span></label>
    <input type="tel" id="phone" placeholder="Mobile number" name="phone" required />
  </div>
  <div className={styles.formgroup}>
    <label for="designation">Designation <span className={styles.required}>*</span></label>
    <select id="designation" name="designation" required>
      <option value="">Select Designation</option>
      <option value="Associate Professor">Associate Professor</option>
      <option value="Assistant Professor">Assistant Professor</option>
      <option value="Lecturer">Lecturer</option>
      <option value="Researcher">Researcher</option>
    </select>
  </div>
  <div className={styles.formgroup}>
    <label for="qualification">Qualification <span className={styles.required}>*</span></label>
    <select id="qualification" name="qualification" required>
      <option value="">Select Qualification</option>
      <option value="PhD">PhD</option>
      <option value="Masters">Masters</option>
      <option value="Bachelors">Bachelors</option>
      <option value="Diploma">Diploma</option>
    </select>
  </div>
  <div className={styles.formgroup}>
    <label for="gender">Gender <span className={styles.required}>*</span></label>
    <select id="gender" name="gender" required>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div className={styles.buttongroup}>
    <button type="button" className={styles.backbtn}>Back</button>
    <button type="submit" className={styles.createbtn}>Save</button>
  </div>
</div>
</div>
</div>
);
};

export default EditFaculty;