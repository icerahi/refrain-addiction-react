import { useContext } from 'react'
import { ServiceDataContext } from '../context/ServiceDataProvider'

const useServicesData = () => {
    return useContext(ServiceDataContext)
}

export default useServicesData
