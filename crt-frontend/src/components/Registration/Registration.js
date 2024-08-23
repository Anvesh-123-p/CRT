import React from "react";
import styles from'./Registration.module.css';
import 'bootstrap/dist/css/bootstrap.css';
const Registration=()=>{
    return(<div>
        <h1 className={styles.demo}>Hello</h1>
        <body>
    <form>
      <section className={styles.hom}>
    <div className={styles.registerpage} />
      {/* <img className={styles.ellipse7" src="ellipse_7_x2.svg}/> */}
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.rectangle6}>
          </div>
          <div className={styles.container1}>
            <div className={styles.pleasefilloutformtoregister}>
              Please Fill out form to Register!
            </div>
            <div className={styles.fullname}>
              Full name:
            </div>
            <input type="text" className={styles.rectangle9} />
            <div className={styles.username}>
              Username:
            </div>
            <input type="text" className={styles.rectangle2} />
            <div className="email">
              Email:
            </div>
            <input type="text" className={styles.rectangle10} />
            <div className="password">
              Password:
            </div>
            <input type="text" className={styles.rectangle3} />
            <div className={styles.confirmpassword}>
              Confirm Password:
            </div>
            <input type="text" className={styles.rectangle8} />
          </div>
        </div>
        
          <input  className={styles.group1} type="submit" value="Register" />
      
        {/* <p className={yesihaveanaccountlogin}>
          <span className={yesihaveanaccountloginsub0}></span><span className={yesihaveanaccountloginsub1}></span><span></span>
        </p> */}
        {/* <div className={styles.social-media-icons}>
          <img className={styles.vector} src="D:\CRT\registration\vector1x2.svg" />
          <img className={vector1} src="D:\CRT\registration\vector4x2.svg"/>
          <img className={vector2} src="D:\CRT\registration\vector2x2.svg"/>
        </div>
      </div> */}
      {/* <div className={rectangle7}>
      </div>
      <div className={rectangle137}>
      </div> */}
      {/* <img className={ellipse5} src="ellipse5x2.svg" /> */}
    </div>
  </section>

  </form>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</div>

    )
    }
    
    export default Registration;