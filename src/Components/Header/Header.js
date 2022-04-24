import React from 'react'
import { useState } from "react";
import '../Header/Header.css'
import logo from '../../images/logo.svg'
import avatar from '../../images/image-avatar.png'
import cartIcon from '../../images/icon-cart.svg'
import Cart from '../Cart/Cart'


export default function Header({numberAdd}) {

  const [cartDisplay, setcartDisplay] = useState('cart-container-hidden');

  

  function cartDisplayfunction() {

    if( cartDisplay === 'cart-container-hidden')
    setcartDisplay('cart-container-show')
    else if( cartDisplay === 'cart-container-show')
    setcartDisplay('cart-container-hidden')

    console.log(cartDisplay)

  }

  let valuecart =''
  let notiDisplay = 'cart-value-hidden'
  numberAdd === 0 ? valuecart='' : valuecart= numberAdd 
  valuecart === '' ? notiDisplay = 'cart-value-hidden': notiDisplay = 'cart-value'

 
    
  return (
    <div className='header'>
        <div className='header-container'>

          <div className='header-right'>

            <a className='logo' href='index.html'>
                <img className='logo' src={logo} alt='logo'></img>
            </a>

            
                <ul className='navbar'>
                    <li className='menu-item'>Collections</li>
                    <li className='menu-item'>Men</li>
                    <li className='menu-item'>Women</li>
                    <li className='menu-item'>About</li>
                    <li className='menu-item'>Contact</li>

                </ul>
          </div>  

          <div className='icons'>

                    <button className='cart-icon' onClick={cartDisplayfunction} >
                      <img src={cartIcon} alt='cart icon'></img>
                      <span className={notiDisplay}>{valuecart}</span>
                      </button>
                    <button className='avatar' ><img className='avatar-image' src={avatar} alt='avatar icon'></img></button>

          </div>

        </div>
        <Cart name={cartDisplay} numberAdd={numberAdd} ></Cart>
    </div>
  )
}
