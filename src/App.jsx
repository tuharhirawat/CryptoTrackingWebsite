
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Components/Header'
// import Main from './Components/MainBody'
// import Footer from './Components/footer'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//       <Header/>
//       <Main/>
//       <Footer/>
//     </>
//   )
// }

// export default App

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import Main from './Components/MainBody';
import SignUp from './Components/SignUp';
import Footer from './Components/footer';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <h1>Welcome to the Crypto World</h1>
          <p>
            Here You Will Find All Kind Of Crypto Airdrops Which Are Free As Well As Paid.
            Crypto Is The Future. Our Only Motto Is Learn And Earn Crypto.
          </p>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </main>
      </div>
      </Router>
  );
}

export default App;
