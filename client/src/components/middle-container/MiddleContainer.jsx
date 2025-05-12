import leftMidImg from '../../assets/images/left-eyewear.webp'
import rightMigImg from '../../assets/images/right-eyewear.webp'
import { Link } from 'react-router';

export default function MiddleContainer() {
  return <div className='middle-container'>
  <img src={leftMidImg} alt="Left img" />
  <img src={rightMigImg} alt="Right img" />

  <Link className='mid-left-women-eyewear'>WOMENS EYEWEAR</Link>
  <Link className='mid-right-mens-eyewear'>MENS EYEWEAR</Link>
</div>;
}