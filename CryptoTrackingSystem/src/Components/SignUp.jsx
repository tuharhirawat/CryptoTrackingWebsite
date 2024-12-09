// import React, { useState } from 'react';
// import './SignUp.css'; // You can create a separate CSS file for styles

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Validate the form
//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     // Name validation
//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//       isValid = false;
//     }

//     // Email validation
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!emailPattern.test(formData.email)) {
//       newErrors.email = 'Enter a valid email address';
//       isValid = false;
//     }

//     // Password validation
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     // Confirm Password validation
//     if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = 'Passwords must match';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form data is valid', formData);
//       // Here you can call an API or handle the form data accordingly.
//     } else {
//       console.log('Form has errors');
//     }
//   };

//   return (
//     <div className="sign-up-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           {errors.password && <p className="error">{errors.password}</p>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//           {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//         </div>

//         <button type="submit" className="signup-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
