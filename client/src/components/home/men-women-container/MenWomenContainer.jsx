import { Link } from 'react-router';
import menWomenImg from '../../../assets/images/mens-womens-clothing.webp'
import './menWomenContainer.css';

export default function MenWomenContainer() {
  return <div className="men-women-container">
    <img  src={menWomenImg} alt="Loading image..." />

    <Link className='women-men-women-a'>WOMENS CLOTHING</Link>
    <Link className='women-men-men-a'>MENS CLOTHING</Link>
  </div>;
}