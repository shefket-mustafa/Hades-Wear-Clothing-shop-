import { Link } from 'react-router';
import homeTop from '../../../assets/images/home-main-top.webp'
import './topContainer.css'


export default function TopContainer() {
  return <div className='top-container'>
  <img className='home-top-img' src={homeTop} alt="Home top image..." />
  <Link to='/catalog/womens-accessoaries-sunglasses' className='top-for-her'>FOR HER</Link>
  </div>;
}