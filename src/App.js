import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import LoginForm from './Components/LoginForm/LoginForm';
import ColorsGenerator from './Components/ColorsGenerator/ColorsGenerator';
import Compteur from './Components/Compteur/Compteur';
import { data } from './Assets/mockData';
import Englobant from './HOC/Englobant';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './Components/Card/Card';

function App() {
    return (
        <Router>
            <Englobant className="App">
                <Header />
                {/* Le switch ne rendra qu'un seul composant */}
                <Switch>
                    <Route path="/" exact />
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/colors">
                        <ColorsGenerator />
                    </Route>
                    <Route path="/compteur">
                        <Compteur />
                    </Route>
                    <Route path="/contenu" exact>
                        <Content data={data} />
                    </Route>
                    <Route path="/contenu/:idCard">
                        <Content data={data} />
                    </Route>
                </Switch>
            </Englobant>
        </Router>
    );
}

export default App;
