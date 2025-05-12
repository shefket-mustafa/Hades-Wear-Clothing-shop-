import { Link } from "react-router";

import './header.css'
import logoHades from '../../assets/images/logo1.jpg'

export default function Header() {
  return <div className="header-container">

    <div className="logo-btns">
        <img src={logoHades} alt="Hades logo loading..." />
        <Link style={{paddingLeft: '80px'}}>Women</Link>
        <Link style={{paddingLeft: '40px'}}>Men</Link>
    </div>

    <div className="search-cart">

        
        <button className="search">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
        </svg>
        </button>

        <button className="cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.01 9l-.94-2H2V5h3l3.6 7.59-1.35 2.45C6.52 15.37 7.48 17 9 17h9v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12L10.1 13h7.45c.75 0 1.41-.41 1.75-1.03L22 6H6.42l-.41-1z"/>
        </svg>

        </button>
    </div>
  </div>
}