import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { firebaseApp } from '../utils/Firebase';

export default () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function registerButtonPressed() {
        firebaseApp.auth().createUserWithEmailAndPassword(email, pass)
            .then(() => {
                console.log("REGISTERED")
            })
            .catch((e) => {
                console.log(e)
            });
    }

    return (
        <div>
            INI REGISTER
            <Link to="/">LOGIN</Link>
            <input onChange={(e) => setEmail(e.target.value)}></input>
            <input onChange={(e) => setPass(e.target.value)}></input>
            <button onClick={registerButtonPressed}>Register</button>
        </div>

    );
}