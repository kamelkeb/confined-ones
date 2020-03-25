import React from 'react';
import styles from './content.module.css';
import Card from '../card/card';

const Content = ({ data }) => {
    return (
        <div className={styles.content}>
            {data.map((item) => {
                return <Card titre={item.titre} contenu={item.contenu} id={item.idItem} />;
            })}
        </div>
    );
};

export default Content;
