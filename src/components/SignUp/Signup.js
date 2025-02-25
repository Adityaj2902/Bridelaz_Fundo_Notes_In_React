import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Signup.scss'; // Import the CSS file
import sideImage from './sideimage.png';
import { signupApiCall } from '../../utils/Api'; // Import the signupApiCall function

const Signup = () => {
  const navigate = useNavigate();

  let firstName, lastName, username, email, password, confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword
    };

    signupApiCall(payload)
      .then(data => {
        console.log("Signup successful:", data);
        navigate('/'); // Redirect to login page or another page after successful signup
      })
      .catch(error => {
        console.error("Signup error:", error);
      });
  };

  return (
    <div className="main ~">
      <form onSubmit={handleSubmit} className='signup-form'>
        <div className="head">
          <h1>Fundoo</h1>
          <h3>Create your Fundoo Account</h3>
          <br />
        </div>

        <div className='signup-row-container'>

          <div className="signup-name">
            <input type="text" name="firstName" onChange={(e) => firstName = e.target.value} required />
            <label>First name</label>
          </div>

          <div className="signup-name">
            <input type="text" name="lastName" onChange={(e) => lastName = e.target.value} required />
            <label>Last name</label>
          </div>
        </div>

        <div className='signup-row-container'>
          <div className="signup-user-name">
            <input type="text" name="username" onChange={(e) => username = e.target.value} required />
            <label>Username</label>
          </div>

          <div className="signup-user-name">
            <input type="email" name="email" onChange={(e) => email = e.target.value} required />
            <label>Email</label>
          </div>
        </div>
        <br />
        <br />

        <p className="line1">You can use letters, numbers & periods</p>
        <br />

        <div className='signup-row-container'>
          <div className="signup-pass">
            <input type="password" name="password" className="password" onChange={(e) => password = e.target.value} required />
            <label>Password</label>
          </div>

          <div className="signup-pass">
            <input type="password" name="confirmPassword" className="password" onChange={(e) => confirmPassword = e.target.value} required />
            <label>Confirm</label>
            <span></span>
          </div>
        </div>
        <p className="line3">Use 8 or more characters with a mix of letters, numbers & symbols</p>
        <a href="/" className="line4">Sign in instead</a>

        <Button type="submit" variant="contained">Register</Button>
      </form>

      <div className="signup-side-image">
        <img src={sideImage} alt="Side visual" className="side-logo" />
      </div>
    </div>
  );
};

export default Signup;