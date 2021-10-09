import React from 'react';
import styles from './navbar.module.css'
import logo from '../images/logo192.png'

const navbar = () => {
    return ( 
        <header className={styles.navbar}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                <li>Home Page</li>
                <li>About Us</li>
                <li>Contact Us</li>
                </ul>
            </div>
            <img src={logo} alt='logo'/>
        </header>
    );
};

export default navbar;