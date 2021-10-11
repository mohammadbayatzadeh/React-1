import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css'
import logo from '../images/logo192.png'

const navbar = () => {
    return ( 
        <header className={styles.navbar}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="#">About Us</Link></li>
                </ul>
            </div>
            <img src={logo} alt='logo'/>
        </header>
    );
};

export default navbar;