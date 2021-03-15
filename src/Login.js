import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";


function Login() {
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://miro.medium.com/proxy/1*jDIj2SKAE-Bp32owLoHDjw.png"
                    alt=""/>
            </div>
            <h1> Sign in to clever programer HQ</h1>
            <p>cleverprogramer.com</p>
            <Button>Sign in with Google</Button>
        </div>
    )
}

export default Login
