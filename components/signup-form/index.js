import styles from './index.module.css'

export default function SignUpForm(){
    return (
        <div className={styles.signUpForm}>
            {/* signup heading and sub-heading */}
            {/* <div className={styles.formHeading}>
                <h1 className={styles.heading}>Please Sign Up</h1>
                <p className={styles.subHeading}>some text here</p>
            </div> */}

            <form method={"POST"} action="app/login">
                {/* the form container */}
                <div className={styles.formContainer}>
                    {/* chose email */}
                    <div className={styles.inputContainer}>
                        <label>Email</label>
                        <input type="" className={styles.inputField} placeholder={"e.g Enter@your.Email"} />
                    </div>

                    {/* choose password */}
                    <div className={styles.inputContainer}>
                        <label>Password</label>
                        <input type="" className={styles.inputField} placeholder={"Choose wisely "} />
                    </div>
                    {/* confirm password */}
                    <div className={styles.inputContainer}>
                        <label>Confirm password</label>
                        <input type="" className={styles.inputField} placeholder={"Confirm Password"} />
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.primaryButton}>Sign up</button>
                    </div>

                    {/* signup footer */}

                    <div className={styles.formFooterContainer}>
                    <p>Already have an account? <a href="#">Log in</a></p>
                    </div>
                </div>
            </form>

        </div>
    )
}