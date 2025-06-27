import { useDispatch, useSelector } from 'react-redux';
import CartLeftItem from '../cart-left-item/CartLeftItem';
import './cart.css'
import { changeQuantity, removeFromCart, selectCartItems, selectTotalSum } from '../../redux/slices/cartSlice';

export default function Cart({ setRemovePop }) {
  const cartItems = useSelector(selectCartItems);
  const totalSum = useSelector(selectTotalSum);
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
      changeQuantity={(id, size, quantity) => dispatch(changeQuantity({id, size, quantity}))}
      removeFromCart={(id,size) => dispatch(removeFromCart({id,size}))}
      setRemovePop={setRemovePop}
      />
      ))
      }

    <div className='cart-total'>
    <p >Total: {`${totalSum.toFixed(2)} €`}</p>
    </div>
    </div>
  </div>;
}