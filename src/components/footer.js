import React, { Component } from 'react';
import styles from './footer.module.css'

class footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <h3> &copy; All Righted Reserved 2020</h3>
            </div>
        );
    }
}

export default footer;