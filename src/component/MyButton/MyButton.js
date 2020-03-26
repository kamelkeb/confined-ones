import React from 'react';
import styles from './MyButton.module.css';

const MyButton = ({ titre, myHandler }) => {
    return (
        <button className={styles.button} onClick={myHandler}>
            {titre}
        </button>
    );
};

export default MyButton;
