import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import yelp from '../api/yelp';

const PostForm = (props) => {
    const [ post, setPost ] = useState({ id: 0, userId: 0, title: '', body: '' });
    const [ id, setId ] = useState(0);
    const [ userId, setUsetId ] = useState(1);
    const [ title, setTitel ] = useState('');
    const [ body, setBody ] = useState('');

    const gestionaireAjout = (id, userId, title, body) => {
        setPost((post) => {
            return { id, userId, title, body };
        });
    };

    const sendPost = async (post) => {
        try {
            await yelp.post(post);
        } catch (err) {
            alert(err);
        }
    };

    useEffect(sendPost(post), [ post ]);

    return (
        <div>
            <label>iD</label>
            <input type="text" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)} />
            <label>idUser</label>
            <input type="text" name="userId" id="userId" value={userId} onChange={(e) => setUsetId(e.target.value)} />
            <label>Titre</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitel(e.target.value)} />
            <br />
            <br />
            <label>body</label>
            <textarea type="text" name="body" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
            <br />
            <br />

            <button onClick={() => gestionaireAjout(id, userId, title, body)}> ajouter post </button>
        </div>
    );
};

export default PostForm;
