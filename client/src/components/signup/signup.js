import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function signupUser(e) {
        e.preventDefault()

        const response = await fetch('https://localhost:8080/signup', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password
        }),
    })

    const data = await response.json()

    if(data.status === 'ok') {
        navigate('/signup-successful')
    } else {
        navigate('/signup-error')
    }

    }

    function validation(e) {
        e.preventDefault()
      
        const regex = 
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (!firstName) {
            console.log('Please add a first name')
        }
        if (!lastName) {
            console.log('Please add a last name')
        }
        if (!email || regex.test(email) === false) {
            console.log('not a valid email')
        }
        if (!password) {
            console.log('please add a password')
        }
        if (!confirmPassword) {
            console.log('please confirm your word')
        }
        if (password !== confirmPassword) {
            console.log('passwords must match')
        }

        console.log(firstName, lastName, email, password, confirmPassword)
        if (firstName && lastName && email && password && confirmPassword) {
            signupUser(e)
        }
    }


    useEffect(() => {
       
    }, [navigate])

    return(
        <div className="signup">
            <div className="signup__header">
                <span className="signup__header--p rotate">P</span><span className="signup__header--sentence">lease fill out the form.</span>
            </div>
            <form 
                className="signup__form" 
                action="submit"
                onSubmit={validation}>
                <div className="signup__form--names">
                    <input 
                        id="firstName" 
                        className="firstName-input"
                        type="text" placeholder=" " 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label 
                        className="firstName-label" 
                        htmlFor="firstName">
                            First Name
                    </label>
                    <input 
                        id="lastName" 
                        className="lastName-input" 
                        type="text" 
                        placeholder=" "
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label 
                        className="lastName-label" 
                        htmlFor="lastName">
                            Last Name
                    </label>
                </div>
                <div className="signup__form--email" >
                    <input 
                        className="email-input" 
                        type="email" id="email" 
                        placeholder=" " 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label 
                        className="email-label" 
                        htmlFor="email">
                            Email
                    </label>
                </div>
                <div className="signup__form--passwords">
                    <input 
                        className="password-input"
                        type="password" 
                        id="password" 
                        placeholder=" " 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <label 
                        className="password-label" 
                        htmlFor="password">
                            Password
                    </label>
                    <input 
                        className="confirmPassword-input" 
                        type="password" 
                        id="confirmPassword" 
                        placeholder=" "
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label 
                        className="confirmPassword-label" 
                        htmlFor="confirmPassword">
                            Confirm Password
                    </label>
                </div>
                <button 
                    className="signup__form--button"
                    type="submit"
                    value="Signup"
                >
                        Submit
                </button>
                    <span >Already a user? <Link className="signup__form--link" to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Signup;