import React from 'react'
import { useState } from 'react'
import '../ImageSection/ImageSection.css'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import thproduct1 from '../../images/image-product-1-thumbnail.jpg'
import thproduct2 from '../../images/image-product-2-thumbnail.jpg'
import thproduct3 from '../../images/image-product-3-thumbnail.jpg'
import thproduct4 from '../../images/image-product-4-thumbnail.jpg'

export default function ImageSection({openfunc}) {

  const [imageSrc , setImageSrc] =useState(product1)

  

  function changeImg(e){

    switch (e.target.src)
    {
    case thproduct1 : setImageSrc(product1); break; 
    case thproduct2 : setImageSrc(product2); break;
    case thproduct3 : setImageSrc(product3); break;
    case thproduct4 : setImageSrc(product4); break;

    default : setImageSrc(product1); break;
  
    }
  }
  function closeLb(){
    openfunc()
}

  

  return (
    <div className='image-container'>
     

        <img className="active-product" src={imageSrc} alt="Product1" onClick={closeLb}/>

        <div className="thumbnail-list">

          <img src={thproduct1} alt="thProduct1" value='thp1' onClick={changeImg} />
          <img src={thproduct2} alt="thProduct2" value='thp2' onClick={changeImg}/>
          <img src={thproduct3} alt="thProduct3" value='thp3' onClick={changeImg}/>
          <img src={thproduct4} alt="thProduct4" value='thp4' onClick={changeImg}/>
      
        </div>
    </div>
  )
}
