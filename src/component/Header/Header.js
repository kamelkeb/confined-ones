import React from 'react';
import MyButton from '../MyButton/MyButton';
import styles from './Header.module.css';

const Header = ({ loginButtonOnClick }) => {
    return (
        <header className={styles.header}>
            <MyButton titre="Home" />
            <MyButton titre="Login" myHandler={loginButtonOnClick} />
            <MyButton titre="Générateur de couleurs" />
            <MyButton titre="Compteur" />
            <MyButton titre="Contenu mappé" />
        </header>
    );
};

export default Header;
