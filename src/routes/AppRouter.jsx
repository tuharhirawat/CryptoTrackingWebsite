import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import CryptoPricing from '../pages/CryptoPricing'
import News from '../pages/News'
import Airdrop from '../pages/Airdrop'
import Mainlayout from '../layouts/MainLayout'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'


function AppRouter() {
  return (<>
    
    <Router>
        < Mainlayout>
            <Routes>
                <Route path='/' element={<Home/>}>Home</Route>
                <Route path='/airdrop' element={ <Airdrop /> }>Airdrop</Route>
                <Route path='/pricing' element={ <CryptoPricing /> }>Crypto Pricing</Route>
                <Route path='/news' element={<News/>}>News</Route>
                <Route path='/about' element={<About />}>About</Route>
                <Route path='/signin' element={ <SignIn /> }>About</Route>
                <Route path='/signup' element={ <SignUp /> }>About</Route>
            </Routes>
        </Mainlayout>
    </Router>

 </>)
}

export default AppRouter