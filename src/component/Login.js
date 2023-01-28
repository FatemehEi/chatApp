import React from 'react';
import Google from "../assets/google.svg";
import styles from "./Login.module.css";
import firebase from 'firebase';
import { auth } from '../firebase';

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Kookgram</h2>
                <div className={styles.button} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <img src={Google} alt="Google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;