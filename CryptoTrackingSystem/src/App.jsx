<<<<<<< HEAD
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Components/Header'
// import Main from './Components/MainBody'
// import Footer from './Components/footer'


=======
import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import Main from './Components/MainBody';
import SignUp from './Components/Signup';
>>>>>>> d79406109c1b0e35e183ec7c52ae753b9484974b

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
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <>
<<<<<<< HEAD
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to the Crypto World</h1>
        <p>Here You Will Find All Kind Of Crypto Airdrops Whcih Are Free As Well As Paid <br/>
        Crypto Is The Future. Our Only Motto Is Learn And Earn Crypto</p>       
      </main>
    </div>
=======
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
>>>>>>> d79406109c1b0e35e183ec7c52ae753b9484974b
    </>
  );
}

export default App;
