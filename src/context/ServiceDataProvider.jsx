import React, { createContext, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
 

export const ServiceDataContext = createContext()

const ServiceDataProvider = ({children}) => {
    const value = useFetch()
    return (
        <ServiceDataContext.Provider value={value}>
            {children}
        </ServiceDataContext.Provider>
    )
}

export default ServiceDataProvider
