import React from 'react';
import styles from './Create_Class.module.css';


const CreateClass = () => {
  return (
    <div>
        <div className={styles.formcontainer}>
      <div className={styles.myform}>
        <div className={styles.formgroup}>
          <label htmlFor="name">Class Name <span className={styles.required}>*</span></label>
          <input type="text" id="name" placeholder="class_name" name="name" required />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="class">Semester <span className={styles.required}>*</span></label>
            <select id="class" name="class" required>
              <option value="">Select Semester</option>
              <option value="Associate Professor">1</option>
              <option value="Assistant Professor">2</option>
            </select>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="facultyname">Section<span className={styles.required}>*</span></label>
          <input type="text" id="email" placeholder="section" name="faculty_name" required />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="class">Class Incharge <span className={styles.required}>*</span></label>
            <select id="class" name="class" required>
              <option value="">Select Class Incharge</option>
              <option value="Associate Professor">faculty 1</option>
              <option value="Assistant Professor">faculty 2</option>
            </select>
        </div>
        <div class={styles.buttongroup}>
            <button type="button" class={styles.backbtn}>Back</button>
            <button type="submit" class={styles.createbtn}>Create</button>
          </div>
      </div>
    </div>
    </div>
    );
};

export default CreateClass;
