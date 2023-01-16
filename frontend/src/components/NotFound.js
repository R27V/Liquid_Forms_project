import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-flex vh-100 align-items-center justify-content-center' style={{fontFamily: 'Dosis', backgroundColor: '#FCC53F'}}>
        <div className="text-center">
            <p style={{fontSize: 200, fontWeight: 'bold', color: '#fff', marginBottom: '0', textShadow: '2px 2px 4px black'}}>404.</p>
            <p className="h1 text-white fw-bold">Looks Like You Have been Lost!!</p>
            <p className="display-3 fw-bold mt-5">PAGE NOT FOUND</p>
            <Link className='btn btn-white fw-bold' to="/main/home">Go To Homepage</Link>
        </div>
    </div>
  )
}

export default NotFound