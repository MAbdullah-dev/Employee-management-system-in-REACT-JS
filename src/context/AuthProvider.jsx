import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utilities/LocalStorage';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({ employees: [], Admin: [] });

    useEffect(() => {
        // Only set localStorage if it's not already there
        if (!localStorage.getItem('employees') || !localStorage.getItem('Admin')) {
            setLocalStorage();
        }

        const { employees, Admin } = getLocalStorage();
        setUserData({ employees, Admin });
        // console.log('Loaded data from localStorage:', data);
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
