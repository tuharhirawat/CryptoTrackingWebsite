import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import Main from './Components/MainBody';
import SignUp from './Components/Signup';

function App() {
  return (
    <>
      <div className="App">
        
        <main>
          <h1>Welcome to the Crypto World</h1>
          <p>
            Here You Will Find All Kind Of Crypto Airdrops Which Are Free As Well As Paid.
            Crypto Is The Future. Our Only Motto Is Learn And Earn Crypto.
          </p>

          {/* Include the SignUp component here */}
          <SignUp/>
        </main>
      </div>
      <Main />
    </>
  );
}

export default App;
