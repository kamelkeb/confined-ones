import React from 'react';
import MyButton from '../MyButton/MyButton';
import styles from './Header.module.css';

const Header = ({
    loginButtonOnClick,
    couleurButtonOnClick,
    compteurButtonOnClick,
    contentButtonOnClick,
    homeButtonOnClick
}) => {
    return (
        <header className={styles.header}>
            <MyButton titre="Home" myHandler={homeButtonOnClick} />
            <MyButton titre="Login" myHandler={loginButtonOnClick} />
            <MyButton titre="Générateur de couleurs" myHandler={couleurButtonOnClick} />
            <MyButton titre="Compteur" myHandler={compteurButtonOnClick} />
            <MyButton titre="Contenu mappé" myHandler={contentButtonOnClick} />
        </header>
    );
};

export default Header;
