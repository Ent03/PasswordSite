
import { Admin, Resource, useDataProvider } from 'react-admin';
import React, {useState} from 'react'
import { useLogin, useNotify, Notification } from 'react-admin';
import './login.css'
import { Link } from 'react-admin';
import { FaLock } from "react-icons/fa";
import {fetchData} from "./networkUtils"

export default function RegisterPage({props}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        fetchData('api/v1/register', {method: 'POST', body: { username, password }})
            .then(response => {
                localStorage.setItem('username', username);
                if (response.status < 200 || response.status >= 300) {
                    notify('Username taken')
                    throw new Error(response.statusText);
                }
                login({ username, password }).catch(() =>
                    notify('Invalid username or password')
                );
            }) 
    };
    
    return (
        <>
            <div class="form">
                <div id="lightbox" class="sign-in-box">
                    <div class="login-header">
                        <div class="lock">
                            <FaLock/>
                        </div>
                        <h2>Password Manager</h2>
                        <p>Create a new user</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <input
                            placeholder="Username"
                            name="username"
                            type="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button class="btn" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}