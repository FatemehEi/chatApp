import React from 'react';
import Google from "../assets/google.svg";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Kookgram</h2>
                <div className={styles.button}>
                    <img src={Google} alt="Google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;