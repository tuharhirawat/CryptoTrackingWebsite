


import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
// import SignUp from './Components/SignUp';
import Main from './Components/AirdropSearch';
import SignIn from './Components/SignIn';
import Mainlayout from './layouts/MainLayout';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>

    {/* <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to the Crypto World</h1>
        <p>Here You Will Find All Kind Of Crypto Airdrops Whcih Are Free As Well As Paid <br/>
        Crypto Is The Future. Our Only Motto Is Learn And Earn Crypto</p>       

      </main>
    </div>
      <SignIn/> */}
    {/* <Main /> */}
    <AppRouter />
    </>
  );
}

export default App;
