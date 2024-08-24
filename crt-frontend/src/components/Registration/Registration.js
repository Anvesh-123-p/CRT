import React from "react";
import styles from'./Registration.module.css';
import 'bootstrap/dist/css/bootstrap.css';
const Registration=()=>{
    return(<div>
         <div className={styles.top_left}></div>
    <div className={styles.top_right}></div>
    <div className={styles.bottom_left}>
        <img src="E:\analysis\Register.png" alt="Image Inside Circle" />
    </div>
    <div className={styles.bottom_right}></div>
    
    <form>
        <legend>Please Fill Out Form to Register</legend>
        <div className="mb-3">
            <label for="FirstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label for="Mobile Number" className="form-label">Mobile Number</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" />
        </div>
       
        <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Terms and Conditions</label>
        </div>
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Register</button>
        </div>

    </form>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</div>

    )
    }
    
    export default Registration;