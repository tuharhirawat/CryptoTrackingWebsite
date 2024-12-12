import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const [loginData, setLoginData] = useState({
    Email: '',
    Password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from the server
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;

      // Find if the user exists with matching email and password
      const user = users.find(
        (user) => user.Email === loginData.Email && user.Password === loginData.Password
      );

      if (user) {
        setSuccess('Login successful!');
        setError('');
        // Redirect to /userlayout after successful login
        navigate('/mainlayout');
      } else {
        setError('Invalid email or password');
        setSuccess('');
        // Redirect to /signup if credentials don't match
        setTimeout(() => {
          navigate('/signup');
        }, 2000); // 2-second delay before redirecting
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={loginData.Email}
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
            value={loginData.Password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit" className="signin-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
