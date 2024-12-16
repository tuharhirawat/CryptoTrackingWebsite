import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation  
import './SignIn.css';  
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
  const navigate = useNavigate(); // Initialize useNavigate  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setLoginData({  
      ...loginData,  
      [name]: value  
    });  

    // Clear the specific error related to the field being changed  
    setError({  
      ...error,  
      [name]: ''  
    });  

    // Validate email in real-time  
    if (name === 'Email') {  
      validateEmail(value);  
    }  
  };  

  const validateEmail = (email) => {  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
    if (!email) {  
      setError(prev => ({ ...prev, Email: 'Please enter your email' }));  
    } else if (!emailPattern.test(email)) {  
      setError(prev => ({ ...prev, Email: 'Please enter a valid email address' }));  
    } else {  
      setError(prev => ({ ...prev, Email: '' })); // Clear error if valid  
    }  
  };  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
  
    // Reset general error  
    setError({ Email: '', Password: '', general: '' });  
  
    // Validate inputs  
    const newError = { Email: '', Password: '', general: '' };  
  
    // Check if Email is empty  
    if (!loginData.Email) {  
      newError.Email = 'Please enter your email address';  
    } else {  
      // Validate email format if it's not empty  
      validateEmail(loginData.Email);  
      if (error.Email) {  
        newError.Email = error.Email; // If there's an existing email error, set it  
      }  
    }  
  
    // Check if Password is empty  
    if (!loginData.Password) {  
      newError.Password = 'Please enter your password';  
    }  
  
    // If there are validation errors, set the error state and return  
    if (newError.Email || newError.Password) {  
      setError(newError);  
      return;  
    }  
  
    try {  
      // Fetch users from the live URL  
      const response = await axios.get('http://localhost:3000/users');  
      const users = response.data;  
  
      // Find if the user exists with matching email  
      const user = users.find((user) => user.Email === loginData.Email);  
  
      if (!user) {  
        // User not found  
        setError({ ...error, general: 'User not found' });  
        setSuccess('');  
      } else if (user.Password !== loginData.Password) {  
        // Incorrect password  
        setError({ ...error, Password: 'Incorrect password' });  
        setSuccess('');  
      } else {  
        // Successful login  
        setSuccess('Login successful! Redirecting to the News page...');  
        setError({ Email: '', Password: '', general: '' });  

        // Redirect after 2 seconds  
        setTimeout(() => {  
          navigate('/News'); // Use navigate for redirection  
        }, 2000);  
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
        {success && <div className="success">{success}</div>}  {/* Display success message */}  

        <button type="submit" className="signin-btn">Sign In</button>  
      </form>  
    </div>  
  );  
};  

export default SignIn;


































// import React, { useState } from 'react';  
// import './SignIn.css';  
// import axios from 'axios';  

// const SignIn = () => {  
//   const [loginData, setLoginData] = useState({  
//     Email: '',  
//     Password: ''  
//   });  
//   const [error, setError] = useState({  
//     Email: '',  
//     Password: '',  
//     general: ''  
//   });  
//   const [success, setSuccess] = useState('');  

//   const handleChange = (e) => {  
//     const { name, value } = e.target;  
//     setLoginData({  
//       ...loginData,  
//       [name]: value  
//     });  

//     // Clear the specific error related to the field being changed  
//     setError({  
//       ...error,  
//       [name]: ''  
//     });  

//     // Validate email in real-time  
//     if (name === 'Email') {  
//       validateEmail(value);  
//     }  
//   };  

//   const validateEmail = (email) => {  
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
//     if (!email) {  
//       setError(prev => ({ ...prev, Email: 'Please enter your email' }));  
//     } else if (!emailPattern.test(email)) {  
//       setError(prev => ({ ...prev, Email: 'Please enter a valid email address' }));  
//     } else {  
//       setError(prev => ({ ...prev, Email: '' })); // Clear error if valid  
//     }  
//   };  

//   const handleSubmit = async (e) => {  
//     e.preventDefault();  
  
//     // Reset general error  
//     setError({ Email: '', Password: '', general: '' });  
  
//     // Validate inputs  
//     const newError = { Email: '', Password: '', general: '' };  
  
//     // Check if Email is empty  
//     if (!loginData.Email) {  
//       newError.Email = 'Please enter your email address';  
//     } else {  
//       // Validate email format if it's not empty  
//       validateEmail(loginData.Email);  
//       if (error.Email) {  
//         newError.Email = error.Email; // If there's an existing email error, set it  
//       }  
//     }  
  
//     // Check if Password is empty  
//     if (!loginData.Password) {  
//       newError.Password = 'Please enter your password';  
//     }  
  
//     // If there are validation errors, set the error state and return  
//     if (newError.Email || newError.Password) {  
//       setError(newError);  
//       return;  
//     }  
  
//     try {  
//       // Fetch users from the live URL  
//       const response = await axios.get('http://localhost:3000/users');  
//       const users = response.data;  
  
//       // Find if the user exists with matching email  
//       const user = users.find((user) => user.Email === loginData.Email);  
  
//       if (!user) {  
//         // User not found  
//         setError({ ...error, general: 'User not found' });  
//         setSuccess('');  
//       } else if (user.Password !== loginData.Password) {  
//         // Incorrect password  
//         setError({ ...error, Password: 'Incorrect password' });  
//         setSuccess('');  
//       } else {  
//         // Successful login  
//         setSuccess('Login successful!');  
//         setError({ Email: '', Password: '', general: '' });  
//       }  
//     } catch (error) {  
//       console.error("Error fetching data:", error);  
//       setError({ ...error, general: 'An error occurred. Please try again later.' });  
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
//           />  
//           {error.Email && <div className="error">{error.Email}</div>}  
//         </div>  

//         <div className="form-group">  
//           <label htmlFor="Password">Password:</label>  
//           <input  
//             type="password"  
//             id="Password"  
//             name="Password"  
//             value={loginData.Password}  
//             onChange={handleChange}  
//           />  
//           {error.Password && <div className="error">{error.Password}</div>}  
//         </div>  

//         {error.general && <div className="error">{error.general}</div>}  

//         <button type="submit" className="signin-btn">Sign In</button>  
//       </form>  
//     </div>  
//   );  
// };  

// export default SignIn;














































// import React, { useState } from 'react';
// import './SignIn.css';
// import axios from 'axios';  

// const SignIn = () => {  
//   const [loginData, setLoginData] = useState({  
//     Email: '',  
//     Password: ''  
//   });  
//   const [error, setError] = useState({  
//     Email: '',  
//     Password: '',  
//     general: ''  
//   });  
//   const [success, setSuccess] = useState('');  

//   const handleChange = (e) => {  
//     const { name, value } = e.target;  
//     setLoginData({  
//       ...loginData,  
//       [name]: value  
//     });  

//     // Clear the specific error related to the field being changed  
//     setError({  
//       ...error,  
//       [name]: ''  
//     });  
//   };  

//   const handleSubmit = async (e) => {  
//     e.preventDefault();  

//     // Reset general error  
//     setError({ ...error, general: '' });  

//     // Validate inputs  
//     const newError = { Email: '', Password: '', general: '' };  
    
//     // Check if Email is empty  
//     if (!loginData.Email) {  
//       newError.Email = 'Please enter your email';  
//     } else {  
//       // Validate email format with regex  
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
//       if (!emailPattern.test(loginData.Email)) {  
//         newError.Email = 'Please enter a valid email address';  
//       }  
//     }  
    
//     // Check if Password is empty  
//     if (!loginData.Password) {  
//       newError.Password = 'Please enter your password';  
//     }  

//     // If there are validation errors, set the error state and return  
//     if (newError.Email || newError.Password) {  
//       setError(newError);  
//       return;  
//     }  

//     try {  
//       // Fetch users from the live URL  
//       const response = await axios.get('http://localhost:3000/users');  
//       const users = response.data;  

//       // Find if the user exists with matching email  
//       const user = users.find((user) => user.Email === loginData.Email);  

//       if (!user) {  
//         // User not found  
//         setError({ ...error, general: 'User not found' });  
//         setSuccess('');  
//       } else if (user.Password !== loginData.Password) {  
//         // Incorrect password  
//         setError({ ...error, Password: 'Incorrect password' });  
//         setSuccess('');  
//       } else {  
//         // Successful login  
//         setSuccess('Login successful!');  
//         setError({ Email: '', Password: '', general: '' });  
//       }  
//     } catch (error) {  
//       console.error("Error fetching data:", error);  
//       setError({ ...error, general: 'An error occurred. Please try again later.' });  
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
              
//           />  
//           {error.Email && <div className="error">{error.Email}</div>}  
//         </div>  

//         <div className="form-group">  
//           <label htmlFor="Password">Password:</label>  
//           <input  
//             type="password"  
//             id="Password"  
//             name="Password"  
//             value={loginData.Password}  
//             onChange={handleChange}  
              
//           />  
//           {error.Password && <div className="error">{error.Password}</div>}  
//         </div>  

//         {error.general && <div className="error">{error.general}</div>}  

//         <button type="submit" className="signin-btn">Sign In</button>  
//       </form>  
//     </div>  
//   );  
// };  

// export default SignIn;









































































// import React, { useState } from 'react';  
// import axios from 'axios';  

// const SignIn = () => {  
//   const [loginData, setLoginData] = useState({  
//     Email: '',  
//     Password: ''  
//   });  
//   const [error, setError] = useState({  
//     Email: '',  
//     Password: '',  
//     general: ''  
//   });  
//   const [success, setSuccess] = useState('');  

//   const handleChange = (e) => {  
//     const { name, value } = e.target;  
//     setLoginData({  
//       ...loginData,  
//       [name]: value  
//     });  

//     // Clear the specific error related to the field being changed  
//     setError({  
//       ...error,  
//       [name]: ''  
//     });  
//   };  

//   const handleSubmit = async (e) => {  
//     e.preventDefault();  

//     // Reset general error  
//     setError({ ...error, general: '' });  

//     // Validate inputs  
//     const newError = { Email: '', Password: '', general: '' };  
//     if (!loginData.Email) {  
//       newError.Email = 'Please enter your email';  
//     }  
//     if (!loginData.Password) {  
//       newError.Password = 'Please enter your password';  
//     }  

//     // If there are validation errors, set the error state and return  
//     if (newError.Email || newError.Password) {  
//       setError(newError);  
//       return;  
//     }  

//     try {  
//       // Fetch users from the live URL  
//       const response = await axios.get('http://localhost:3000/users');  
//       const users = response.data;  

//       // Find if the user exists with matching email and password  
//       const user = users.find(  
//         (user) => user.Email === loginData.Email && user.Password === loginData.Password  
//       );  

//       if (user) {  
//         setSuccess('Login successful!');  
//         setError({ Email: '', Password: '', general: '' });  
//       } else {  
//         setError({ ...error, general: 'Invalid email or password' });  
//         setSuccess('');  
//       }  
//     } catch (error) {  
//       console.error("Error fetching data:", error);  
//       setError({ ...error, general: 'An error occurred. Please try again later.' });  
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
             
//           />  
//           {error.Email && <div className="error">{error.Email}</div>}  
//         </div>  

//         <div className="form-group">  
//           <label htmlFor="Password">Password:</label>  
//           <input  
//             type="password"  
//             id="Password"  
//             name="Password"  
//             value={loginData.Password}  
//             onChange={handleChange}  
            
//           />  
//           {error.Password && <div className="error">{error.Password}</div>}  
//         </div>  

//         {error.general && <div className="error">{error.general}</div>}  

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

//   const navigate = useNavigate(); 

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
