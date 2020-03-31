import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import LoginForm from './Components/LoginForm/LoginForm';
import ColorsGenerator from './Components/ColorsGenerator/ColorsGenerator';
import Compteur from './Components/Compteur/Compteur';
import Englobant from './HOC/Englobant';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Card from './Components/Card/Card';
import yelp from './api/yelp';

function App() {
    const [ data, setData ] = useState([]);

    useEffect(async () => {
        const result = await yelp.get();
        setData(result.data);
    }, []);

    console.log(data);

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
                    <Route path="/colors" exact>
                        <ColorsGenerator />
                    </Route>
                    <Route path="/compteur" exact>
                        <Compteur />
                    </Route>
                    <Route path="/contenu" exact>
                        <Content data={data} />
                    </Route>
                    <Route path="/contenu/:idCard" exact>
                        <Content data={data} />
                    </Route>
                    <Route path="*">
                        <Redirect to="/login" />
                    </Route>
                </Switch>
            </Englobant>
        </Router>
    );
}

export default App;
