import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        alert('Register succesfull')
         setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        return signOut(auth)
    }

    const login = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
       
        return updateProfile(auth.currentUser, updatedData)

    }

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
            setLoading(false)

        });
        return () => {
            unsbscribe();
        }
    }, [])


    const authdata = {
        user,
        setUser,
        createUser,
        logout,
        login,
        updateUser,
        loading,
        setLoading,
    }

    return (
        <AuthContext value={authdata}>{children}</AuthContext>
    );
};

export default AuthProvider;