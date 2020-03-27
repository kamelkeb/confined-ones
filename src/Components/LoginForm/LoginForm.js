import React, { useState } from 'react';
import tyles from './LoginForm.module.css';
import { Redirect, useHistory } from 'react-router-dom';
import MyButton from '../MyButton/MyButton';

const LoginForm = (props) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    return (
        <form>
            <label for="nom">Entrez votre nom d'utilisateur s'il vous plaît</label>
            <br />
            <input type="text" name="nom" id="nom" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Bonjour {username}</label>
            {username.split().map((c) => (
                <div>
                    <p>{c}</p>
                    <br />
                </div>
            ))}
            <br />
            <label for="mdp">Entrez votre mot de passe s'il vous plaît</label>
            <br />
            <input
                type="text"
                name="mdp"
                id="nom"
                value="mdp"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>{password.length <= 5 ? 'Le mot de passe doit comporter plus de 5 caractère' : null}</label>
            <MyButton titre="Connexion" myHandler={() => history.push('/')} />
        </form>
    );
};

export default LoginForm;
