import React, { createContext } from 'react'
import useFirebase from '../hooks/useFirebase'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const authValue = useFirebase()
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
