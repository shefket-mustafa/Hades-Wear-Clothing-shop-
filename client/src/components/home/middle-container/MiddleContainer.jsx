import leftMidImg from '../../../assets/images/left-eyewear.webp'
import rightMigImg from '../../../assets/images/right-eyewear.webp'
import { Link } from 'react-router';

export default function MiddleContainer() {
  return <div className='middle-container'>
  <img src={leftMidImg} alt="Left img" />
  <img src={rightMigImg} alt="Right img" />

  <Link to='/catalog/womens-accessoaries-sunglasses' className='mid-left-women-eyewear'>WOMENS EYEWEAR</Link>
  <Link to='/catalog/mens-accessoaries-sunglasses' className='mid-right-mens-eyewear'>MENS EYEWEAR</Link>
</div>;
}