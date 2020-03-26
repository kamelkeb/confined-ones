import React, { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Content from './component/content/content';
import LoginForm from './component/LoginForm/LoginForm';
import ColorsGenerator from './component/ColorsGenerator/ColorsGenerator';
import Compteur from './component/Compteur/Compteur';
import { data } from './assets/mockData';

function App() {
    const [ formVisible, setFormVisible ] = useState(false);
    const [ couleursVisible, setCouleursVisible ] = useState(false);
    const [ compteurVisible, setCompteurVisible ] = useState(false);
    const [ contentVisible, setContentVisible ] = useState(false);

    const toutCacher = () => {
        setContentVisible(false);
        setCompteurVisible(false);
        setCouleursVisible(false);
        setFormVisible(false);
    };

    return (
        <div className="App">
            <Header
                loginButtonOnClick={() => {
                    toutCacher();
                    setFormVisible(!formVisible);
                }}
                couleurButtonOnClick={() => {
                    toutCacher();
                    setCouleursVisible(!couleursVisible);
                }}
                compteurButtonOnClick={() => {
                    toutCacher();
                    setCompteurVisible(!compteurVisible);
                }}
                contentButtonOnClick={() => {
                    toutCacher();
                    setContentVisible(!contentVisible);
                }}
                homeButtonOnClick={toutCacher}
            />

            {formVisible ? <LoginForm /> : null}
            {couleursVisible ? <ColorsGenerator /> : null}
            {compteurVisible ? <Compteur /> : null}
            {contentVisible ? <Content data={data} /> : null}
        </div>
    );
}

export default App;
