import React from "react";
import styles from'./Login.module.css';
import 'bootstrap/dist/css/bootstrap.css';
const Registration=()=>{

    return(<div>
        <div className={styles.top_left}></div>
    <div className={styles .top_right}t></div>
    <div className={styles .bottom_left}>
        <img src="E:\analysis\login-crt\login-crt\group_8_x2 (1) (1).png"  />
    </div>
    <div className={styles.bottom_right}></div>
    
    <form>
       <legend><h1> <b>WELCOME</b></h1></legend>
       <legend><h3><b>PLEASE LOGIN HERE</b></h3></legend>
       
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email-address" aria-describedby="emailHelp" required  />
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label" >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
        </div>
        <div className="mb-3 form-check">
          <a href="#">  <label className="form-check-label" for="exampleCheck1">Forget Password</label></a>
        </div>
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Login</button>
        </div>
        <div >
            <label   >or continue with</label>
        </div>
        <div className="social-icons">
  <a href="#"  title="facebook"> 
    <i className="fa fa-facebook-square" aria-hidden="true"></i>
  </a>
  
  <a href="#" title="Google">  
    <i className="fa fa-google" aria-hidden="true"></i>
  </a>
 
  <a href="#" title="linkedin">
    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
  </a>
  <div>
  <label className="form-check-label" for="exampleCheck1" >Don't have an Account Yet ?  <a href="#"> <i>REGISTER HERE</i></a></label>
</div>
 
</div>
</form>
    </div>)
}

export default Registration;