import React, { useState } from 'react';

import './App.css';

import Header from './component/Header/Header';
import Content from './component/content/content';
import MyButton from './component/MyButton/MyButton';

function App() {
    const [ myCompteur, setMyCompteur ] = useState(0);

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
    return (
        <div className="App">
            <Header />
            <div>
                <MyButton titre="Incrémenter compteur" myHandler={() => setMyCompteur(myCompteur + 1)} />
                <div style={{ width: '200px', height: '200px', fontSize: 38 }}>{myCompteur}</div>
            </div>
            <Content data={data} />
        </div>
    );
}

export default App;
