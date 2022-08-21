
import { Admin, Resource } from 'react-admin';
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useLogin, useNotify, Notification } from 'react-admin';
import { Link } from 'react-admin';
import RegisterPage from './register';
import './login.css'
import { FaLock } from "react-icons/fa";
import { useDataProvider } from 'react-admin';

const LoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const navigate = useNavigate(); 

    const handleSubmit = e => {
        e.preventDefault();
        console.log(password);
        
        login({ username, password}).catch(() =>
            notify('Invalid username or password')
        );
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
                        <p>Please enter your credentials to login.</p>
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
                        <button class="btn" type="submit">Log In</button>
                        <div class="test">
                            <Link to="/signup">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
