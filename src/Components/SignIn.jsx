// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook for redirection

//   const [loginData, setLoginData] = useState({
//     Email: '',
//     Password: ''
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Fetch users from the server
//       const response = await axios.get('http://localhost:3000/users');
//       const users = response.data;

//       // Find if the user exists with matching email and password
//       const user = users.find(
//         (user) => user.Email === loginData.Email && user.Password === loginData.Password
//       );

//       if (user) {
//         setSuccess('Login successful!');
//         setError('');
//         // Redirect to /userlayout after successful login
//         navigate('/mainlayout');
//       } else {
//         setError('Invalid email or password');
//         setSuccess('');
//         // Redirect to /signup if credentials don't match
//         setTimeout(() => {
//           navigate('/signup');
//         }, 2000); // 2-second delay before redirecting
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('An error occurred. Please try again later.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="sign-in-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="Email">Email:</label>
//           <input
//             type="email"
//             id="Email"
//             name="Email"
//             value={loginData.Email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Password">Password:</label>
//           <input
//             type="password"
//             id="Password"
//             name="Password"
//             value={loginData.Password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {error && <div className="error">{error}</div>}
//         {success && <div className="success">{success}</div>}

//         <button type="submit" className="signin-btn">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;







// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate
// import './SignIn.css';

// const SignIn = () => {
//   const [loginData, setLoginData] = useState({
//     Email: '',
//     Password: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const navigate = useNavigate();  // Initialize useNavigate hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value
//     });
//   };

//   // Email validation function
//   const isValidEmail = (email) => {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
//   };

//   // Password validation function
//   const isValidPassword = (password) => {
//     return password.trim().length > 0; // Password cannot be empty
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate email and password before submitting
//     if (!isValidEmail(loginData.Email)) {
//       setError('Please enter a valid email address');
//       setSuccess('');
//       return; // Prevent form submission
//     }

//     if (!isValidPassword(loginData.Password)) {
//       setError('Password cannot be empty');
//       setSuccess('');
//       return; // Prevent form submission
//     }

//     try {
//       const response = await axios.get('http://localhost:3000/users');
//       const users = response.data;

//       const user = users.find(
//         (user) => user.Email === loginData.Email && user.Password === loginData.Password
//       );

//       if (user) {
//         setSuccess('Login successful!');
//         setError('');

//         setTimeout(() => {
//           navigate('/'); 
//         }, 1000);

//       } else {
//         setError('Invalid email or password');
//         setSuccess('');
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError('An error occurred. Please try again later.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="sign-in-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="Email">Email:</label>
//           <input
//             type="email"
//             id="Email"
//             name="Email"
//             value={loginData.Email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Password">Password:</label>
//           <input
//             type="password"
//             id="Password"
//             name="Password"
//             value={loginData.Password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {error && <div className="error">{error}</div>}
//         {success && <div className="success">{success}</div>}

//         <button type="submit" className="signin-btn">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;





import React, { useState } from 'react';  
import axios from 'axios';  

const SignIn = () => {  
  const [loginData, setLoginData] = useState({  
    Email: '',  
    Password: ''  
  });  
  const [error, setError] = useState({  
    Email: '',  
    Password: '',  
    general: ''  
  });  
  const [success, setSuccess] = useState('');  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setLoginData({  
      ...loginData,  
      [name]: value  
    });  

    setError({  
      ...error,  
      [name]: ''  
    });  
  };  

  const handleSubmit = async (e) => {  
    e.preventDefault();  

    setError({ ...error, general: '' });  

    const newError = { Email: '', Password: '', general: '' };  
    
    if (!loginData.Email) {  
      newError.Email = 'Please enter your email';  
    } else {  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
      if (!emailPattern.test(loginData.Email)) {  
        newError.Email = 'Please enter a valid email address';  
      }  
    }  
    
    if (!loginData.Password) {  
      newError.Password = 'Please enter your password';  
    }  

    if (newError.Email || newError.Password) {  
      setError(newError);  
      return;  
    }  

    try {  
      const response = await axios.get('http://localhost:3000/users');  
      const users = response.data;  

      const user = users.find((user) => user.Email === loginData.Email);  

      if (!user) {  
        setError({ ...error, general: 'User not found' });  
        setSuccess('');  
      } else if (user.Password !== loginData.Password) {  
        setError({ ...error, Password: 'Incorrect password' });  
        setSuccess('');  
      } else {  
        setSuccess('Login successful!');  
        setError({ Email: '', Password: '', general: '' });  
      }  
    } catch (error) {  
      console.error("Error fetching data:", error);  
      setError({ ...error, general: 'An error occurred. Please try again later.' });  
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
              
          />  
          {error.Email && <div className="error">{error.Email}</div>}  
        </div>  

        <div className="form-group">  
          <label htmlFor="Password">Password:</label>  
          <input  
            type="password"  
            id="Password"  
            name="Password"  
            value={loginData.Password}  
            onChange={handleChange}  
              
          />  
          {error.Password && <div className="error">{error.Password}</div>}  
        </div>  

        {error.general && <div className="error">{error.general}</div>}  

        <button type="submit" className="signin-btn">Sign In</button>  
      </form>  
    </div>  
  );  
};  

export default SignIn;