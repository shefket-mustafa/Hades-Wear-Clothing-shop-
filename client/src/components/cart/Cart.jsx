import CartLeftItem from '../cart-left-item/CartLeftItem';
import './cart.css'

export default function Cart({ cartItems = [], changeQuantity, removeFromCart }) {
  return <div className="cart-modal">

    <div className="cart-items-left">

      <h2>Your items</h2>
      {cartItems.length === 0 ? <p className='cart-empty'>Your shopping cart is empty.</p> : 
      
      cartItems.map((item) => (
      <CartLeftItem 
      key={item.id + item.size} 
      item={item} 
      size={item.size} 
      quantity={item.quantity} 
      changeQuantity={changeQuantity}
      removeFromCart={removeFromCart}
      />
      ))
      }

    </div>
    
  </div>;
}