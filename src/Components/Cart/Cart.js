import '../Cart/Cart.css'
import product from '../../images/image-product-1-thumbnail.jpg'
import delet  from '../../images/icon-delete.svg'

export default function Cart(props) {
  
  let number = props.numberAdd
  

  
function deleteFromCard(){

  
}

  
let hide2 =''
let hide1 ='hide'



if(number === 0 ){
  hide1=''
  hide2='hide'
}
else  {
  hide1='hide'
  hide2=''

}




  return (
      
        <div className={props.name}>
            <div className='cart-title'><h3>Cart</h3></div>
            <div className={`cart-body-empty ${hide1}`}><h4>Your card is empty.</h4></div>
            <div className={`cart-body ${hide2}` }>
              <div className='cart-details'>
                <img className='product-img' src={product} alt='product'></img>
                <div className='product-text'>
                  <h4>Fall Limited Edition Sneakers</h4>
                  <p>$120.00 x {number} <span>${120*number}.00</span></p>

                </div>
                <button className='delete-btn' onClick={deleteFromCard}>
                <img  src={delet} alt='delete'></img>
                </button>
              </div>
              <button className='checkout-btn'>

                Checkout

              </button>


            </div>
        
        
    </div>
  )
}
