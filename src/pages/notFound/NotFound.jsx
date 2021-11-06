import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
    const history=useHistory()
    const goBack=()=>{
        history.goBack()
    }    
    const goHome=()=>{
        history.push('/')
    }
    return (
        <div className="container text-center mx-auto">
            <img src="https://image.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg" alt="" />
            <button onClick={goBack} className="btn btn-danger fs-6 fw-bolder border-0 py-2 px-4 m-2">Go Back</button>
            <button onClick={goHome} className="btn btn-danger fs-6 fw-bolder border-0 py-2 px-4">Go Home</button>
        </div>
    )
}

export default NotFound
