import React from 'react';
import styles from "./support.module.css";

import logo from '../images/logo192.png'


const support = () => {
    return (
        <div className={styles.container}>
            <p > Who Support Us?</p>
            <div className={styles.logobox}>
            <img src={logo} alt='logo' />
            <img src={logo} alt='logo' />
            <img src={logo} alt='logo' />
            </div>
        </div>
    );
};

export default support;