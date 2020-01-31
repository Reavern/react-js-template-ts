import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { firebaseApp } from '../utils/Firebase';

export default () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function loginButtonPressed() {
        firebaseApp.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                console.log("LOGGED IN")
            })
            .catch((e) => {
                console.log(e)
            });
    }
    return (
        <div>
            INI Login
            <Link to="/home">Home</Link>
            <Link to="/register">REGISTER</Link>
            <input onChange={(e) => setEmail(e.target.value)}></input>
            <input onChange={(e) => setPass(e.target.value)}></input>
            <button onClick={loginButtonPressed}>Login</button>
        </div>

    );
}