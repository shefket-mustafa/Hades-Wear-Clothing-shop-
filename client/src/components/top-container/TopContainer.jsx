import homeTop from '../../assets/images/home-main-top.webp'


export default function TopContainer() {
  return <div className='top-container'>
  <img className='home-top-img' src={homeTop} alt="Home top image..." />
  <button className='top-for-her'>FOR HER</button>
  </div>;
}