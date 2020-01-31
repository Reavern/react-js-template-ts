import React from 'react';

import AuthProvider from './providers/AuthProvider';

type Props = {
    children?: any
}

const Store = ({ children }: Props) => {

    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default Store;