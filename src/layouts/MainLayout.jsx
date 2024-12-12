import React from 'react'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'

function Mainlayout({children}) {
  return (
    <div>

       {/* <Header /> */}
       < Navbar />
       {children}
       <Footer />

    </div>
  )
}

export default Mainlayout