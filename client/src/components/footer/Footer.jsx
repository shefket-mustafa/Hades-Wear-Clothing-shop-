import { Link } from 'react-router';
import './footer.css'

export default function Footer() {
  return <div className="footer-container">


    <div className="policies-footer">
        <h1>POLICIES</h1>
        <Link>General Conditions</Link>
    </div>

    <div className="about-footer">
        <h1>ABOUT HADES WEAR</h1>

    </div>

    <div className="follow-footer">
        <h1>FOLLOW US</h1>
    </div>

    
  </div>;
}