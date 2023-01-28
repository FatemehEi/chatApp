import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Kookgram
            </div>
            <div className={styles.logout} onClick={props.logoutHandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;