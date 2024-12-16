// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SignUp.css';

// const signupURL = "http://localhost:3000/users";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const [SignUpData, setSignUpData] = useState({
//     Name: "",
//     Email: "",
//     Password: "",
//     ConfirmPassword: "" 
//     });

//   const [successMessage, setSuccessMessage] = useState(""); 
//   const [errorMessage, setErrorMessage] = useState(""); 
//   const [passwordMatchError, setPasswordMatchError] = useState(""); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData({
//       ...SignUpData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// h
//     if (SignUpData.Password !== SignUpData.ConfirmPassword) {
//       setPasswordMatchError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post(signupURL, SignUpData);
//       console.log('User registered successfully:', response.data);

//       setSuccessMessage("Signup successful! Redirecting to login...");

//       setSignUpData({
//         Name: "",
//         Email: "",
//         Password: "",
//         ConfirmPassword: "" 
//       });

//       setTimeout(() => {
//         navigate('/signin');
//       }, 3000);

//     } catch (error) {
//       console.error("Error during sign up:", error);

//       setErrorMessage("Error during signup. Please try again.");
//     }
//   };

//   return (
//     <div className="sign-up-container">
//       <h2>Sign Up</h2>
//       {successMessage && <div className="success-message">{successMessage}</div>}
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       {passwordMatchError && <div className="error-message">{passwordMatchError}</div>} 
      
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="Name">Name:</label>
//           <input
//             type="text"
//             id="Name"
//             name="Name"
//             value={SignUpData.Name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Email">Email:</label>
//           <input
//             type="email"
//             id="Email"
//             name="Email"
//             value={SignUpData.Email}
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
//             value={SignUpData.Password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="ConfirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="ConfirmPassword"
//             name="ConfirmPassword"
//             value={SignUpData.ConfirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="signup-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;







import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const signupURL = "http://localhost:3000/users";

const SignUp = () => {
  const [SignUpData, setSignUpData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...SignUpData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  // const validatePassword = (password) => {
  //   const regex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d@$!%*?&]{8,}$/;
  //   return regex.test(password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SignUpData.Name || !SignUpData.Email || !SignUpData.Password || !SignUpData.ConfirmPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!validateEmail(SignUpData.Email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // if (!validatePassword(SignUpData.Password)) {
    //   setErrorMessage("Password must be at least 8 characters long and contain at least one letter and one number.");
    //   return;
    // }

    if (SignUpData.Password !== SignUpData.ConfirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(signupURL, SignUpData);
      console.log('User registered successfully:', response.data);

      setSuccessMessage("Signup successful! Welcome to Crypto Tracker.");
      setErrorMessage("");

      setSignUpData({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
      });

      setTimeout(() => {
        navigate('/signin');
      }, 2000);

    } catch (error) {
      console.error("Error during sign up:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Error during signup. Please try again.");
      } else {
        setErrorMessage("Error during signup. Please try again.");
      }
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