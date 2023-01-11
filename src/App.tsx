import React from 'react'
// import logo from './logo.svg'
import './App.css'

import { Footer, Blog, Posibillities, Features, Whatgpt, Header } from './containers'
import { Cta, Brand, Navbar } from './components'

const App: React.FC = () => {
  return (

    <div className="App">
      <h1> GPT-3</h1>
      <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <Whatgpt/>
      <Features/>
      <Posibillities/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
