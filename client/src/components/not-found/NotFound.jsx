import { Link } from 'react-router';
import notFoundImg from '../../assets/images/error-404.jpg'
import './notFound.css';
export default function NotFound() {
  return <div className="not-found-container">
    
    <div className='not-found-text'>
    <p>404 Error — PUG NOT FOUND 🐶</p>
        <p>Looks like this pug ran off with the page you're looking for.</p>
        <Link to="/">Go back to the home page</Link>
    </div>
    <img src={notFoundImg} alt="Loading.." />
  </div>;
}