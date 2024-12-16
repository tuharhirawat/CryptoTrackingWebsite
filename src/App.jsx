import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SignIn from './Pages/SignIn';
import Main from './Components/MainBody';
import SignUp from './Components/SignUp';
import Footer from './Components/footer';
import About from './Pages/About';
import Pricing from './Components/pricing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './Components/News';
import PrivacyPolicy from './Pages/PrivacyPolicy';
// import { useNavigate } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          { <div className='welcome-heading'>
          <h1>Welcome to the Crypto World</h1>
          <p>
            Here You Will Find All Kind Of Crypto Airdrops Which Are Free As Well As Paid.
            Crypto Is The Future. Our Only Motto Is Learn And Earn Crypto.
          </p>
          </div> }
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/news" element={<News />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />


          </Routes>
          
          <Footer />
          
          
      </div>
      </Router>
  );
}

export default App;