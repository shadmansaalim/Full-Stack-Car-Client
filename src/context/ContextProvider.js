import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const authContext = useFirebase();
    return (
        <Context.Provider value={[authContext]}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;