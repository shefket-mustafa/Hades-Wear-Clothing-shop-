import CartLeftItem from '../cart-left-item/CartLeftItem';
import './cart.css'

export default function Cart({ cartItems = [] }) {
  return <div className="cart-modal">

    <div className="cart-items-left">

      <h2>Your items</h2>
      {cartItems.length === 0 ? <p className='cart-empty'>Your shopping cart is empty.</p> : 
      
      cartItems.map(({product, size}) => (
      <CartLeftItem key={product.id + size} item={product} size={size}/>
      ))
      }

    </div>
    
  </div>;
}