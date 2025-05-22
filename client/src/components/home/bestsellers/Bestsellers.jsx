import { useNavigate } from 'react-router';
import './bestsellers.css'

export default function Bestsellers({itemData}) {

  const navigate = useNavigate();
    


  return <div className="bestseller-item">
    <div className='bestseller-top'>
    <img onClick={() => navigate(`/catalog/${itemData.id}/details`)} src={itemData.thumbnail} alt={itemData.title} />
    </div>

    <div className="product-data">
        <p>{itemData.title}</p>
        <p> <strong>{itemData.price.toFixed(2)} $</strong></p>    
    </div>
  </div>;
}