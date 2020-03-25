import React from 'react';
import styles from './card.module.css';

const Card = ({ titre, contenu }) => {
    return (
        <card className={styles.card}>
            <div>{titre}</div>
            <br />
            <div>{contenu}</div>
        </card>
    );
};

export default Card;
