import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import profile2 from '../../assets/profile2.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={profile2} alt="" />

      
    </div>
  )
}

export default Navbar
