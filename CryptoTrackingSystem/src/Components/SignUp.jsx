import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import './SignUp.css';  // Ensure to import your CSS for styles

const signupURL = "http://localhost:3000/users";  // API URL for storing signup details

const SignUp = () => {
  const [SignUpData, setSignUpData] = useState({
    Name: "",
    Email: "",
    Password: ""
    // ConfirmPassword: ""
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...SignUpData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Send POST request to json-server
    try {
      const response = await axios.post(signupURL, SignUpData);
      console.log('User registered successfully:', response.data);

      // Clear form after successful submission
      setSignUpData({
        Name: "",
        Email: "",
        Password: ""
        // ConfirmPassword: ""
      });
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
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

        {/* <div className="form-group">
          <label htmlFor="ConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            value={SignUpData.ConfirmPassword}
            onChange={handleChange}
            required
          />
        </div> */}

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
