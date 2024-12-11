import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './SignUp.css';

const signupURL = "http://localhost:3000/users";

const SignUp = () => {
  const [SignUpData, setSignUpData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""  // Add ConfirmPassword to the state
  });
  
  const [successMessage, setSuccessMessage] = useState("");  // State to handle success message
  const [errorMessage, setErrorMessage] = useState("");  // State to handle error message

  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...SignUpData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (SignUpData.Password !== SignUpData.ConfirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;  // Prevent form submission if passwords don't match
    }

    try {
      const response = await axios.post(signupURL, SignUpData);
      console.log('User registered successfully:', response.data);

      // Display success message
      setSuccessMessage("Signup successful! Welcome to Crypto Tracker.");
      
      // Clear the error message (if any)
      setErrorMessage("");

      // Clear the form data but keep the form visible
      setSignUpData({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""  // Clear ConfirmPassword as well
      });

      // Redirect to the login page after successful signup (optional)
      setTimeout(() => {
        navigate('/signin');  // Redirect to login page
      }, 2000);  // Wait 2 seconds before redirecting to give time to see the success message

    } catch (error) {
      console.error("Error during sign up:", error);
      
      // Display error message
      setErrorMessage("Error during signup. Please try again.");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}  
      {errorMessage && <div className="error-message">{errorMessage}</div>} 
      
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































