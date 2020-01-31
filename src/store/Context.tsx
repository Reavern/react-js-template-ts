import { createContext } from 'react';

const initialAuthContext: {
    loggedIn: boolean;
    role: string;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
} = {
    loggedIn: false,
    role: '',
    setLoggedIn: () => {}
}

export const AuthContext = createContext(initialAuthContext);