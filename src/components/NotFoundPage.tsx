import React from 'react';
import { useLocation } from 'react-router-dom';

export default () => {

    let location = useLocation();

    return (
        <div>
            <code>{location.pathname}</code>
           404 Not Found 
        </div>

    );
}