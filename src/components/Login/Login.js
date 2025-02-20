import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Login/Login.scss';
import { loginApiCall } from '../../utils/Api'; // Import the loginApiCall function

const Login = ()=> {
    const navigate = useNavigate();

    let email;
    let password;

    const handleLogin = () => {
        console.log("Login button clicked");
        console.log("Email:", email);
        console.log("Password:", password);

        const payload = { email, password };
        console.log("Payload:", payload);
        
        loginApiCall(payload)
            .then(data => {
                console.log("Login successful:", data);
            })
            .catch(error => {
                console.error("Login error:", error);
            });
    }

    return (
        <>
            <div className="Login-container">
                <h1 className="Login-title">Fundo</h1>
                <h2 className="Login-subtitle">Sign in</h2>
                <p className="Login-description">Use your Fundoo Account</p>
                <form className="Login-form">
                    <TextField 
                        id="outlined-basic" 
                        onChange={(e) => email = e.target.value} 
                        label="Email or phone*" 
                        variant="outlined" 
                    />
                    <br/>
                    <TextField 
                        id="outlined-basic" 
                        onChange={(e) => password = e.target.value} 
                        label="Password*" 
                        variant="outlined" 
                        type="password"
                    />
                    <br/>
                    <div className="Login-links">
                        <button 
                            type="button" 
                            className="link" 
                            onClick={() => console.log('Forgot password clicked')}
                        >
                            Forgot password
                        </button>
                        <span className="link"> | </span>
                        <button 
                            type="button" 
                            className="link" 
                            onClick={() => navigate('/signup')}
                        >
                            Create account
                        </button>
                    </div>
                    <br/>
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </form>
                <div className="Login-footer">
                    <select className="select">
                        <option>English (United States)</option>
                    </select>
                    <span className="link">Help</span>
                    <span className="link">Privacy</span>
                    <span className="link">Terms</span>
                </div>
            </div>
        </>
    );
}

export default Login;