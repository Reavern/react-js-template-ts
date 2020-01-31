import React from 'react';

import { Link } from 'react-router-dom';

type Props = {
    children: any
}

const ComponentWrapper = ({ children }: Props) => {
    return (
        <>
           
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            {children}
        </>

    );
}

function wrapComponent(children : any) {
    return(
        <ComponentWrapper>
            {children}
        </ComponentWrapper>
    );
}

export default wrapComponent;