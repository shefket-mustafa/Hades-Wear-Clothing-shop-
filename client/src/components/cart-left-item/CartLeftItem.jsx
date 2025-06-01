import { useState } from "react"

export default function CartLeftItem({item, size}) {

    const [inputState, setInputState] = useState(1)
  return <div key={item.id} className='cart-left-item'>

  <img src={item?.images[0]} alt={item.title} />
  <div className='cart-item-details'>
    <p>{item.title}</p>
    <p>{item.price} €</p>
    {size && <p><strong>Size:</strong> {size}</p>}
  </div>
  <div className="cart-left-container">
    <button onClick={() => {
        if(inputState<=1){
            return
        } else {
            setInputState(prev => prev-1)
        }
    }}>-</button>
    <input type="text" value={inputState}/>
    <button onClick={() => setInputState(prev => prev+1)}>+</button>
  </div>
</div>
}