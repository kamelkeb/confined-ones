import React from 'react';
import styles from './MyButton.module.css';

const MyButton = (props) => {
    return <button className={styles.button}>{props.titre}</button>;
};

export default MyButton;
