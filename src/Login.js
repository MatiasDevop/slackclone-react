import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {

    const [state, dispatch] = useStateValue();
    
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://miro.medium.com/proxy/1*jDIj2SKAE-Bp32owLoHDjw.png"
                    alt=""/>

                <h1> Sign in to clever programer HQ</h1>
                <p>cleverprogramer.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>     
            </div>
        </div>
    )
}

export default Login
