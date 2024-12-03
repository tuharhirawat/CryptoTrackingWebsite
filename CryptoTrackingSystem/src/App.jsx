import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Main from './Components/MainBody'
import Footer from './Components/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
