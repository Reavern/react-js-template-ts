import React from 'react';

import { Link, useParams } from 'react-router-dom';

export default () => {
    
    let { id } = useParams();

    return (
        <div>
            INI About {id}
            <Link to="/">HOME</Link>
        </div>

    );
}