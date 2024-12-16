import React from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import CryptoPricing from '../pages/CryptoPricing'
import News from '../pages/News'
import Airdrop from '../pages/Airdrop'
import Mainlayout from '../layouts/MainLayout'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'
import './AppRouter.css'
import UserLayout from '../layouts/UserLayout'
import axios from 'axios'


function AppRouter() {
  
    // const isLoggedIn=axios.get
  
  return (<>
    
        

        
        {/* <Router>
        <Mainlayout >
        <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/news' element={<News/>}>News</Route>
        </Routes>
        </Mainlayout>
        </Router> */}
        

    <Router>

        < Mainlayout>
            <Routes>
                <Route path='/' element={<Home/>}>Home</Route>
                <Route path='/pricing' element={ <CryptoPricing /> }>Crypto Pricing</Route>
                <Route path='/news' element={<News/>}>News</Route>
                <Route path='/airdrop' element={ <Airdrop /> }>Airdrop</Route>
                <Route path='/about' element={<About />}>About</Route>
                <Route path='/signin' element={ <SignIn /> }>SignIn</Route>
                <Route path='/signup' element={ <SignUp /> }>SignUp</Route>
                <Route path='/pricing' element={ <CryptoPricing /> }>Logout</Route>
            </Routes>
        </Mainlayout>

        <Outlet />

    </Router>

    {/* <Router>
    <UserLayout >
    <Route path='/airdrop' element={ <Airdrop /> }>Airdrop</Route>
    </UserLayout>
    </Router> */}
 </>)
}

export default AppRouter



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';  // Add import for Dashboard
// import SignIn from '../Components/SignIn';
// import SignUp from '../Components/SignUp';
// import './AppRouter.css';

// function AppRouter() {
//   const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

//   return (
//     <Router>
//       <Routes>
//         {isLoggedIn ? (
//           <Route path="/dashboard" element={<Dashboard />} />
//         ) : (
//           <Route path="/signin" element={<SignIn />} />
//         )}

//         <Route path="/signup" element={<SignUp />} />
//         <Route path="*" element={<Navigate to="/signin" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;
