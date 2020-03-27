import React from 'react';
import MyButton from '../MyButton/MyButton';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ compteurButtonOnClick, contentButtonOnClick, homeButtonOnClick }) => {
    return (
        <header className={styles.header}>
            <MyButton titre="Home" myHandler={homeButtonOnClick} />
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/colors">Générateur de couleurs</NavLink>

            <MyButton titre="Compteur" myHandler={compteurButtonOnClick} />
            <MyButton titre="Contenu mappé" myHandler={contentButtonOnClick} />
        </header>
    );
};

export default Header;
