import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './success.css';
import SoccerBallLoader from '../../assets/SoccerBallLoader.gif';

function SignupSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/login')
        }, 2500)
    })

    return (
        <div className="success">
            <h1>Your user profile was successfully created!</h1>
            <h3>Please wait while you are being re-directed to login...</h3>
            <img src={SoccerBallLoader}></img>
        </div>
    )
}

export default SignupSuccess;
