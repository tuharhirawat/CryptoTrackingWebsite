import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const signupURL = "http://localhost:3000/users";

const SignUp = () => {
  const navigate = useNavigate();

  const [SignUpData, setSignUpData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "" 
    });

  const [successMessage, setSuccessMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [passwordMatchError, setPasswordMatchError] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...SignUpData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
h
    if (SignUpData.Password !== SignUpData.ConfirmPassword) {
      setPasswordMatchError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(signupURL, SignUpData);
      console.log('User registered successfully:', response.data);

      setSuccessMessage("Signup successful! Redirecting to login...");

      setSignUpData({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "" 
      });

      setTimeout(() => {
        navigate('/signin');
      }, 3000);

    } catch (error) {
      console.error("Error during sign up:", error);

      setErrorMessage("Error during signup. Please try again.");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {passwordMatchError && <div className="error-message">{passwordMatchError}</div>} 
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={SignUpData.Name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={SignUpData.Email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={SignUpData.Password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            value={SignUpData.ConfirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
