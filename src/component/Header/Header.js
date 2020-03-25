import React from 'react';
import MyButton from '../MyButton/MyButton';
import styles from './Header.module.css';


const Header = (props) => {
    return (
        <header className={styles.header}>
            <MyButton titre="Home" />
            <MyButton titre="Contenu" />
            <MyButton titre="Profile" />
        </header>
        
    );
};

export default Header;