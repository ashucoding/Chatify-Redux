import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import img from './logo.jpg';
import { Button } from "@material-ui/core";

function Login() {
    const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));

    };
    return (
        <div className='login'>
        <div className="login_logo">
            <img src={img} alt="" />

        </div>
        <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login
