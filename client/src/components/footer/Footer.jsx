import { Link } from 'react-router';
import './footer.css'

export default function Footer() {
  return <div className="footer-container">


    <div className="policies-footer">
        <h1>POLICIES</h1>
        <Link to='/policies/general-conditions'>General Conditions</Link>
        <Link to="/policies/shipping">Shipping</Link>
        <Link to="/policies/privacy-policy">Privacy Policy</Link>
        <Link to="/policies/terms-of-use">Terms of Use</Link>
        <Link to="/policies/cookies-policy">Cookies Policy</Link>
        <Link to="/policies/legal-terms">Legal Terms</Link>
    </div>

    <div className="about-footer">
        <h1>HADES WEAR</h1>
        <p><strong>Email:</strong>shefket.must@gmail.com</p>
        <p><strong>Phone:</strong>+359 89 422 9461</p>

    </div>

    <div className="follow-footer">
        <h1>FOLLOW US</h1>

        <div className='footer-icons'>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
    </svg>
    
  </a>
  
  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3.64l.36-4H15V6a1 1 0 0 1 1-1h2z"></path>
    </svg>
  </a>

  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4.01c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.29 4.29 0 0 0-7.3 3.91A12.2 12.2 0 0 1 3.15 3.2a4.28 4.28 0 0 0 1.33 5.72A4.3 4.3 0 0 1 2.8 8v.05a4.29 4.29 0 0 0 3.44 4.21 4.3 4.3 0 0 1-1.12.15 4.22 4.22 0 0 1-.81-.08 4.3 4.3 0 0 0 4.01 2.98A8.6 8.6 0 0 1 2 19.54 12.14 12.14 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.36-.02-.53A8.29 8.29 0 0 0 22 4.01z"></path>
    </svg>
    
  </a>
  </div>
    </div>

    
  </div>;
}