import './cart.css'

export default function Cart({ cartItems = [] }) {
  return <div className="cart-modal">

    <div className="cart-items-left">

      <h2>Your items</h2>
      {cartItems.length === 0 ? <p className='cart-empty'>Your shopping cart is empty.</p> : 
      
      cartItems.map((item) => (
      <div key={item.id} className='cart-left-item'>
        <img src={item.images[0]} alt={item.title} />
        <div className='cart-item-details'>
          <p>{item.title}</p>
          <p>{item.price} €</p>
        </div>
      </div>
      ))
      }

    </div>
    
  </div>;
}