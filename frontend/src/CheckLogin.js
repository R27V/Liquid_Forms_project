import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const CheckLogin = ({children, redirect, sessionVar}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem(sessionVar)));

    if(currentUser===null) return children;
    else return <Navigate to={redirect} /> 
}

export default CheckLogin