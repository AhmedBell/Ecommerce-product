import React from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
import '../src/main.css'
import ImageSection from "./Components/ImageSection/ImageSection";
import TextSection from "./Components/TextSection/TextSection";
import LightBox from "./Components/LightBox/LightBox";



function App() {

  const [lBtoggel , setLbtoggel]=useState('lightBox-hide')
  const [CartItemNub , setCartItemNub]=useState(0)

  function setOpenbtn(){
    setLbtoggel('')
  }
  function setclosebtn(){
    setLbtoggel('lightBox-hide')
  }

  function cartItemNub(num){
    setCartItemNub(num)
    console.log(CartItemNub)
  }



  return (
    <div className='main' >

      <Header numberAdd ={CartItemNub}></Header>
      <div className='content'>
        <ImageSection openfunc ={setOpenbtn}></ImageSection>
        <TextSection add={cartItemNub}></TextSection>
      </div>

      <div className={lBtoggel}><LightBox closefunc ={setclosebtn}></LightBox></div>
    
    </div>
  );
}

export default App;
