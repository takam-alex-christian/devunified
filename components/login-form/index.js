import styles from './index.module.css'

export default function LoginForm() {

    return (

        <div className={styles.loginForm}>
            <div className={styles.formHeading}>
                <h1>Welcome back</h1>
                <p>Please enter your credentials to login</p>
            </div>

            <form method="post" action="/login">
                
                {/* email container */}
                <div className={styles.emailContainer}>
                    <label htmlFor="login-email">Email</label>
                    <input id="login-email" />
                </div>


                {/* password container */}
                <div className={styles.passwordContainer}>
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" />
                </div>

                {/* remember me container */}
                <div className={styles.rememberMeContainer}>
                    <div>
                        <input type="checkbox" />
                        <label>Remember me for 30 days</label>
                    </div>
                    <div>
                        <a href="#">Forgot password</a>
                    </div>
                </div>

                {/* login buttons */}
                <div>
                    <button>Login</button>
                    <button>Sign in with Google</button>
                </div>

                {/* form footer */}
                <div className={styles.formFooterContainer}>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>

            </form>
        </div>

    )
}