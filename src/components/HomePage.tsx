import React from 'react';

import { Link } from 'react-router-dom';

import { firebaseApp } from '../utils/Firebase';

export default () => {

    function logoutButtonPressed() {
        firebaseApp.auth().signOut()
            .then(() => {
                console.log("SIGNED OUT")
            })
            .catch((e) => {
                console.log(e)
            });
    }

    return (
        <div>
            INI HOME
            <div style={{ backgroundColor: 'red', height: 1200, width: 600 }}>

            </div>
            <button onClick={logoutButtonPressed}>Log Out</button>
            <Link to="/login">Log Out</Link>
            <Link to={`/about/asdzzzz`}>About</Link>
        </div>

    );
}