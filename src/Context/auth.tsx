import React, { createContext,ReactNode,useState, useEffect } from 'react';
import firebase from 'gatsby-plugin-firebase';


type  Props = {
    children:ReactNode,
    
}

export const AuthContext = createContext({})



const AuthProvider = ({children}:Props) => {
    const [user, setUser] = useState();

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user => setUser(user))
    },[])

    return (
    <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;