import React, { useState } from 'react';

import './App.css';

import Header from './component/Header/Header';
import Content from './component/content/content';
import MyButton from './component/MyButton/MyButton';
import LoginForm from './component/LoginForm/LoginForm';

function App() {
    const [ myCompteur, setMyCompteur ] = useState(0);
    const [ myColor, setMyColor ] = useState([]);
    const [ formVisible, setformVisible ] = useState(false);

    const modifierCompteur = (delta) => setMyCompteur(delta + myCompteur);

    const couleur = () => {
        return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
    };

    const data = [
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 1
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 2
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 3
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 4
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 5
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 6
        },
        {
            titre: 'News',
            contenu: 'Lorem ipsum',
            idItem: 7
        }
    ];

    const ColorGenerator = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <MyButton titre="Generer une div" myHandler={() => setMyColor([ ...myColor, couleur() ])} />
            {myColor.map((item) => {
                return <div style={{ width: '200px', height: '200px', fontSize: 38, backgroundColor: item }} />;
            })}
        </div>
    );

    const Compteur = (
        <div style={{ margin: '100px' }}>
            <MyButton titre="Incrémenter compteur" myHandler={() => modifierCompteur(1)} />
            <MyButton titre="Décrémenter compteur" myHandler={() => modifierCompteur(-1)} />
            <div style={{ width: '100px', height: '100px', fontSize: 38, margin: '30px' }}>{myCompteur}</div>
        </div>
    );

    return (
        <div className="App">
            <Header />

            {formVisible ? <LoginForm /> : null}

            {ColorGenerator}

            {Compteur}
            <Content data={data} />
        </div>
    );
}

export default App;
