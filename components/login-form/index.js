import styles from './index.module.css'

export default function LoginForm() {

    return (

        <div className={styles.loginForm}>
            {/* <div className={styles.formHeading}>
                <h1 className={styles.heading}>Welcome back</h1>
                <p className={styles.subHeading}>Please enter your credentials to log in</p>
            </div> */}

            <form method="post" action="/login">
                <div className={styles.formContainer}>


                    {/* email container */}
                    <div className={styles.emailContainer}>
                        <label htmlFor="login-email">Email</label>
                        <input id="login-email" placeholder='Enter@your.email' />
                    </div>


                    {/* password container */}
                    <div className={styles.passwordContainer}>
                        <label htmlFor="login-password">Password</label>
                        <input id="login-password" placeholder='Pass•••d' />
                    </div>

                    {/* password forgotten me container */}

                    <div className={styles.passwordForgottenContainer}>
                        <a href="#">Password forgotten?</a>
                    </div>


                    {/* login buttons */}
                    <div className={styles.buttonContainer}>
                        <button className={styles.loginButton}>Log in</button>
                        <button className={styles.signInWithGoogle}><img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />Sign in with Google</button>
                    </div>

                    {/* form footer */}
                    <div className={styles.formFooterContainer}>
                        <p>Don't have an account? <a href="#">Sign up</a></p>
                    </div>
                </div>
            </form>
        </div>

    )
}