import { useState } from "react"

export default function CartLeftItem({item, size, quantity, changeQuantity, removeFromCart, setRemovePop}) {

  const quantityDecrement = () => {
    if (quantity > 1) {
      changeQuantity(item.id, size, quantity - 1);
    } else {
      removeFromCart(item.id, size)
    }
  }

  const quantityIncrement = () => {
    changeQuantity(item.id, size, quantity + 1);
  };

    
  return <div key={item.id} className='cart-left-item'>
    <p onClick={() => {
      removeFromCart(item.id,size)
      setRemovePop(true)
      setTimeout(() => {setRemovePop(false)},1500)
      }} className="cart-item-x">X</p>

  <img src={item?.images[0]} alt={item.title} />
  <div className='cart-item-details'>
    <p>{item.title}</p>
    <p>{((item.price * quantity).toFixed(2))} €</p>
    {size && <p><strong>Size:</strong> {size}</p>}
  </div>
  <div className="cart-left-container">
    <button style={{color: 'black'}} onClick={quantityDecrement}>-</button>
    <input type="text" value={quantity}/>
    <button style={{color: 'black'}} onClick={quantityIncrement}>+</button>
  </div>
</div>
}