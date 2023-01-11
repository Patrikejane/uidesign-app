import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

// BEM -> Block Elemnt Modifier

const Menu: React.FC = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whatgpt'>what is gpt</a></p>
    <p><a href='#posibility'>Open Ai</a></p>
    <p><a href='#features'>Case studies</a></p>
    <p><a href='#blog'>libararies</a></p>
  </>
)

const navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt__navbar'>
      <div className='gpt__navbar-links'>
        <div className='gpt__navbar_logo'>
          <img src={logo} alt="logo"></img>
        </div>
        <div className='gpt__navbar-links_container'>
          <Menu></Menu>
        </div>
      </div>
      <div className='gpt__navbar-sign'>
        <p> Sign in</p>
        <button type='button'> Sign Up</button>
      </div>
      <div className='gpt_navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={ () => { setToggleMenu(false) } }/>
          : <RiMenu3Line color='#fff' size={27} onClick={ () => { setToggleMenu(true) } }/>
      }
      {
        toggleMenu && (
          <div className='gpt__navbar-menu_container scale-up-center'>
            <div className='gpt__navbar-menu_container-links'>
              <Menu></Menu>
              <div className='gpt__navbar-menu_container-links-sign'>
                <p> Sign in</p>
                <button type='button'> Sign Up</button>
              </div>
            </div>
          </div>
        )
      }
      </div>
{/* <h1>navbar</h1> */}
    </div>
  )
}

export default navbar
