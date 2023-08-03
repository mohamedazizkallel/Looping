import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { IoLogoTiktok } from 'react-icons/io5'
import './footer.css'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='about'>
            <div className='logo'>
              <img src='./img/looping_logo2.png' alt='logo'></img>
            </div>
            <div className='detail'>
              <p>we make e-commerce happen</p>
              <div className='icon'>
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <BsInstagram />
                </li>
                <li>
                  <FiTwitter />
                </li>
                <li>
                  <AiOutlineYoutube />
                </li>
                <li>
                  <IoLogoTiktok />
                </li>
              </div>
            </div>
          </div>
          <div className='account'>
            <h3>My Account </h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className='page'>
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
