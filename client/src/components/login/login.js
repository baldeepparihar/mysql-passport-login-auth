import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function loginUser(e) {
        e.preventDefault()

        const response = await fetch('https://localhost:8080/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            email: email,
            password: password
            }),
        })

        const data = await response.json()

        if(data.user) {
            localStorage.setItem('token', data.user)
            navigate('/dashboard')
        } else {
            response.json('Please check your username and password')
        }
}

useEffect(() => {
    
}, [navigate])

    return (
        <div className="login">
            <div className="login__header">
                <span className="L1">P</span> 
                <span className="L2">l</span> 
                <span className="L3">e</span> 
                <span className="L4">a</span> 
                <span className="L5">s</span> 
                <span className="L6">e </span>

                <span className="L7">l</span>
                <span className="L8">o</span> 
                <span className="L9">g </span>

                <span className="L10">i</span> 
                <span className="L11">n</span> 
                <span className="L12">t</span>
                <span className="L13">o </span>

                <span className="L14">y</span> 
                <span className="L15">o</span> 
                <span className="L16">u</span> 
                <span className="L17">r </span>

                <span className="L18">a</span> 
                <span className="L19">c</span> 
                <span className="L20">c</span>
                <span className="L21">o</span>
                <span className="L22">u</span>
                <span className="L23">n</span>
                <span className="L24">t</span>
                <span className="L25">.</span>
            </div>


            <h3>Fill out your log in information</h3>
            <form
                onSubmit={loginUser}
                className="login__form">
                <h4>Login</h4>
                <input 
                    type="email" 
                    // name="loginEmail" 
                    id="loginEmail"
                    placeholder=" "
                    className="login__email-input"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}} />
                <label 
                    htmlFor="loginEmail"
                    className="login__email-label">
                        Email
                    </label>
                <input 
                    type="password" 
                    // name="loginPassword" 
                    id="loginPassword"
                    placeholder=" "
                    className="login__password-input"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}} />
                <label 
                    htmlFor="loginPassword"
                    className="login__password-label">
                        Password
                    </label>
                <button 
                    className="login__form--button"
                    type="submit"
                    value="Login"
                    >
                        Login
                </button>
            </form>
        </div>
    )
}

export default Login;
