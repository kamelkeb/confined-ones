import React, { useState } from 'react';
import tyles from './LoginForm.module.css';

const LoginForm = (props) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    return (
        <form>
            <label for="nom">Entrez votre nom d'utilisateur s'il vous plaît</label>
            <br />
            <input type="text" name="nom" id="nom" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Bonjour {username}</label>
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
        </form>
    );
};

export default LoginForm;
