import React from 'react';
import styles from './create_faculty.module.css';

const CreateFaculty = () => {
  return (
    <div className={styles.formcontainer}>
      <div className={styles.myform}>
        <div className={styles.formgroup}>
          <label htmlFor="name">Faculty Name <span className={styles.required}>*</span></label>
          <input type="text" id="name" placeholder="Faculty Name" name="name" required />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email">Email id <span className={styles.required}>*</span></label>
          <input type="email" id="email" placeholder="Email" name="email" required />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="phone">Mobile number <span className={styles.required}>*</span></label>
          <input type="tel" id="phone" placeholder="Mobile Number" name="phone" required />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="designation">Designation <span className={styles.required}>*</span></label>
          <select id="designation" name="designation" required>
            <option value="">Select Designation</option>
            <option value="Associate Professor">Associate Professor</option>
            <option value="Assistant Professor">Assistant Professor</option>
            <option value="Lecturer">Lecturer</option>
            <option value="Researcher">Researcher</option>
          </select>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="qualification">Qualification <span className={styles.required}>*</span></label>
          <select id="qualification" name="qualification" required>
            <option value="">Select Qualification</option>
            <option value="PhD">PhD</option>
            <option value="Masters">Masters</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="gender">Gender <span className={styles.required}>*</span></label>
          <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class={styles.buttongroup}>
            <button type="button" class={styles.backbtn}>Back</button>
            <button type="submit" class={styles.createbtn}>Create</button>
          </div>
      </div>
    </div>
  );
};

export default CreateFaculty;
