import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openLoginModal, setOpenLoginModal] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUser = (name, phone) => {
        updateProfile(auth.currentUser, { displayName: name, phoneNumber: phone });
    };

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("use in the auth state change", currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        openLoginModal,
        setOpenLoginModal,
        createUser,
        logOut,
        signIn,
        updateUser,
        verifyEmail,
        resetPassword,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
