import React, { useState } from 'react'

const CheckLogin = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

    if(currentUser!==null) return children;
    else 
  return (
    <div>CheckLogin</div>
  )
}

export default CheckLogin