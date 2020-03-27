import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import LoginForm from './Components/LoginForm/LoginForm';
import ColorsGenerator from './Components/ColorsGenerator/ColorsGenerator';
import Compteur from './Components/Compteur/Compteur';
import { data } from './Assets/mockData';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    const [ compteurVisible, setCompteurVisible ] = useState(false);
    const [ contentVisible, setContentVisible ] = useState(false);

    const toutCacher = () => {
        setContentVisible(false);
        setCompteurVisible(false);
    };

    return (
        <Router>
            <div className="App">
                <Header
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
                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/colors">
                        <ColorsGenerator />
                    </Route>
                </Switch>

                {compteurVisible ? <Compteur /> : null}
                {contentVisible ? <Content data={data} /> : null}
            </div>
        </Router>
    );
}

export default App;
