import React, { useState, useEffect } from 'react';
import MyButton from '../MyButton/MyButton';

const Compteur = (props) => {
    const [ myCompteur, setMyCompteur ] = useState(0);
    const [ state, setState ] = useState(true);
    const modifierCompteur = (delta) => setMyCompteur(delta + myCompteur);

    //     useEffect(() => {
    //     // Ici mettre le code de l'effet voulu
    //     return () => {
    //         //Section 'return' optionnelle, y mettre le code de nettoyage
    //     }
    // }, [state1, satete2, props1, props2])
    // //En deuxième argument useEffect peut prendre
    // // un tableau contenant les dépendances (une dépendance et un truc dont le changement
    // // devra entrainer l'exécution de l'effet lors du nouvel affichage. Si pas de changement
    // // de dépendance, pas d'exécution si pas de changement dans les dépendances)
    // // - Si le tableau passé en second argument est vide, l'effet n'est exécut qu'une seule fois
    // // après le premier affichage.

    useEffect(
        () => {
            document.title = `J'ai cliqué ${myCompteur} fois`;
        },
        [ myCompteur ]
    );

    return (
        <div style={{ margin: '100px' }}>
            <MyButton titre="Incrémenter compteur" myHandler={() => modifierCompteur(1)} />
            <MyButton titre="Décrémenter compteur" myHandler={() => modifierCompteur(-1)} />
            <div style={{ width: '100px', height: '100px', fontSize: 38, margin: '30px' }}>{myCompteur}</div>
            <MyButton titre="Provoquer un rendu" myHandler={() => setState(!state)} />
        </div>
    );
};

export default Compteur;
