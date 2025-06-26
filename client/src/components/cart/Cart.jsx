import { useDispatch, useSelector } from 'react-redux';
import CartLeftItem from '../cart-left-item/CartLeftItem';
import './cart.css'
import { changeQuantity, removeFromCart, selectCartItems } from '../../redux/slices/cartSlice';

export default function Cart({ setRemovePop }) {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

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
      changeQuantity={(payload) => dispatch(changeQuantity(payload))}
      removeFromCart={(payload) => dispatch(removeFromCart(payload))}
      setRemovePop={setRemovePop}
      />
      ))
      }

    </div>
    
  </div>;
}