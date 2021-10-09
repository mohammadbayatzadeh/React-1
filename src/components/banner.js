import React from 'react';
import styles from './banner.module.css'
// import bannerpic from '../images/212648.jpg'

const banner = () => {
    return (
        <div className={styles.banner}>
            {/* <img src={bannerpic} alt='banner' /> */}
            <div className={styles.bannertext}>
                <h1><span>Reactjs</span>Web</h1>
                <h3>We're Here To Learn <span>Reactjs</span>.</h3>
            </div>
        </div>
    );
};

export default banner;