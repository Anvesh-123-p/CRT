import React, { useState } from "react";
import styles from './Student_login.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import myImage from '../../../assests/MyImage.png';
import { useNavigate } from 'react-router-dom'; 

const Registration = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };
    const Signup = (e) => {
        e.preventDefault();  
        navigate('/signup');     
    };

    return (
        <div>
            <div className={styles.circle}>
                <img src={myImage} alt="Centered Image" className={styles.centered_image} />
            </div>

            <div className={styles.form_container}>
                    <h2 className="{styles.h2,h6}">WELCOME BACK</h2>
                    <h6>SIGN IN TO CONTINUE</h6>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">E-mail/User name <span className={styles.required_asterisk}>*</span></label>
                        <input type="email" className="form-control" id="firstName" required />
                    </div>
                    <div className={`mb-3 ${styles.password_container}`}>
                        <label htmlFor="password" className="form-label">
                            Password <span className={styles.required_asterisk}>*</span>
                        </label>
                        <div className={styles.passwordLabel}>
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                className="form-control" 
                                id="password" 
                                required 
                            />
                            <span 
                                className={styles.password_toggle} 
                                onClick={togglePassword}
                            >
                                {passwordVisible ? '🙈' : '👁️'}
                            </span>
                        </div>
                    </div>
                    <div className={styles.bottom_links}>
                        <div>
                            <input type="checkbox" className={styles.f} /> Remember me
                        </div>
                        <div className={styles.forget_password}>
                            <a href="#" className={styles.f}>Forget Password?</a>
                        </div>
                    </div>
                    <a href="#" type="submit" className={`btn btn-lg ${styles.btn_full_width} ${styles.custom_btn}`}>
                        Sign in
                    </a>
                    <p>If you do not have an account,<a onClick={Signup} className={styles.f}> register here!</a></p>
                    
                
            </div>
        </div>
    );
}

export default Registration;
