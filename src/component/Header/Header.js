import React from 'react';
import MyButton from '../MyButton/MyButton';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <MyButton titre="Home" />
            <MyButton titre="Login" />
            <MyButton titre="Générateur de couleurs" />
            <MyButton titre="Compteur" />
            <MyButton titre="Contenu mappé" />
        </header>
    );
};

export default Header;
