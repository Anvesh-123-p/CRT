import React from 'react';
import styles from './Forgot_Pass.module.css';

const Forgot_Pass = () => {
    return (
        <div className={styles.container}>
            <label htmlFor="email" className={styles.label}>Forgot Password</label>
            <input 
                id="email" 
                type="email" 
                className={styles.inputField} 
                placeholder="Enter Email Address" 
            />
            <a href="sign-in.html" className={styles.backLink}>Back to Sign In</a>
            <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
    );
};

export default Forgot_Pass;
