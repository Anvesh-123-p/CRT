import React from 'react';
import styles from './Verify.module.css';

const Verify = () => {
    return (
        <div className={styles.formContainer}>
            <form className={styles.myForm}>
                <div className={styles.formGroup}>
                    <div className={styles.verificationText}>Verify</div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.centeredText}>Enter Verification Code</div>
                </div>
                <div className={styles.inputContainer}>
                    <input 
                        type="text" 
                        placeholder="2" 
                        className={styles.circleInput} 
                        maxLength="1"
                    />
                    <input 
                        type="text" 
                        placeholder="5" 
                        className={styles.circleInput} 
                        maxLength="1"
                    />
                    <input 
                        type="text" 
                        placeholder="7" 
                        className={styles.circleInput} 
                        maxLength="1"
                    />
                    <input 
                        type="text" 
                        placeholder="9" 
                        className={styles.circleInput} 
                        maxLength="1"
                    />
                </div>
                <div className={styles.formGroup1}>
                    <label htmlFor="resend">
                        If you didn't receive the code,{' '}
                        <a href="#" className={styles.resendLink}>Resend</a>
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">
                        Enter Password<span className={styles.required}>*</span>
                    </label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Enter at least 8 digits" 
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirm-password">
                        Confirm Password<span className={styles.required}>*</span>
                    </label>
                    <input 
                        id="confirm-password" 
                        type="password" 
                        placeholder="* * * * * * * * * *" 
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.createBtn}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Verify;
