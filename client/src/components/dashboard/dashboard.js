import React, { useState, useEffect } from 'react';
import './dashboard.css';
import jwt from 'jsonwebtoken';

import { useNavigate } from 'react-router-dom';

function Dashboard() {
const navigate = useNavigate();
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');


async function getUser() {
    const req = await fetch('https://mernstack-auth-signup-app.herokuapp.com/loggedUser', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    })

    const data = await req.json()
    if (data.status === 'ok') {
        setFirstName(data.user.firstName)
        setLastName(data.user.lastName)
        setEmail(data.user.email)
        console.log('User Data: ', data.user)
    } else {
        alert('no data')
    }
}

useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        const user = jwt.decode(token)
        console.log(user)
        if(!user) {
            localStorage.removeItem('token')
            navigate('/login')
        } 
    }
}, [getUser(), navigate])

async function logoutUser() {
    localStorage.removeItem('token')
    navigate('/login')

}


    return (
        <div className="dashboard">
            <h1 className="dashboard__header">Welcome to your dashboard {firstName ? firstName : ''}</h1>
            <div className="dashboard__h3-container">
                <h3>FirstName: {firstName}</h3>
                <h3>LastName: {lastName}</h3>
                <h3>Email: {email}</h3>
                <h3
                    className="signout"
                    onClick={() => {logoutUser()}}
                    >
                Logout
                </h3>
            </div>
        </div>
    )
}

export default Dashboard;