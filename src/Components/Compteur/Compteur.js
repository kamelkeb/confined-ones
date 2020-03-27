import React, { useState } from 'react';
import MyButton from '../MyButton/MyButton';

const Compteur = (props) => {
    const [ myCompteur, setMyCompteur ] = useState(0);
    const modifierCompteur = (delta) => setMyCompteur(delta + myCompteur);
    return (
        <div style={{ margin: '100px' }}>
            <MyButton titre="Incrémenter compteur" myHandler={() => modifierCompteur(1)} />
            <MyButton titre="Décrémenter compteur" myHandler={() => modifierCompteur(-1)} />
            <div style={{ width: '100px', height: '100px', fontSize: 38, margin: '30px' }}>{myCompteur}</div>
        </div>
    );
};

export default Compteur;
