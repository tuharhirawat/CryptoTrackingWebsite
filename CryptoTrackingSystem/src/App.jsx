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
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to the Crypto World</h1>
        <p>Here You Will Find All Kind Of Crypto Airdrops Whcih Are Free As Well As Paid <br/>
        Crypto Is The Future. Our Only Motto Is Learn And Earn Crypto</p>       
      </main>
    </div>
    </>
  );
}

export default App;
