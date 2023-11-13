import { useState } from 'react'
import { Link } from "react-router-dom";

function Login() {
    return (
        <Link style={{color: 'black'}} to="/Connected">
    <button className='bg-white rounded'>
        <p className='text-black'>
        Se connecter
            
        </p>
    </button></Link>
    )
}

export default Login