import { Link, useNavigate } from "react-router";

import './header.css'
import logoHades from '../../assets/images/logo1.jpg'
import dropVisual from '../../assets/images/dropdown-visual.webp'
import dropVisual2 from '../../assets/images/dropdown-visuals-shoes.webp'
import mensVisual from '../../assets/images/mensDropdown1.webp'
import mensVisual2 from '../../assets/images/mensVisual2.webp'
import DropDownImage from "./dropdown-visuals-image/DropDownImage";

export default function Header() {

  const navigate = useNavigate();
  return <div className="header-container">

    <div className="logo-btns">
        <img onClick={() => navigate('/')} src={logoHades} alt="Hades logo loading..." />

        <div className="menu-item">
        <Link to='/catalog/women' >Women</Link>

        <div className="dropdown">
          <div className="dropdown-clothing">
            <h1>CLOTHING</h1>
            <Link to='/catalog/womens-shirts'>WOMENS SHIRTS</Link>
            <Link to='/catalog/womens-dresses'>WOMENS DRESSES</Link>
          </div>

          <div className="dropdown-shoes">
            <h1>SHOES</h1>
          <Link to='/catalog/womens-shoes'>WOMENS SHOES</Link>
          </div>

          <div className="dropdown-accessoaries">
            <h1>ACCESOARIES</h1>
          <Link to='/catalog/womens-bags'>WOMENS BAGS</Link>
          <Link to='/catalog/womens-watches'>WOMENS WATCHES</Link>
          <Link to='/catalog/womens-jewellery'>WOMENS JEWELLERY</Link>
          <Link to='/catalog/womens-accessoaries-sunglasses'>WOMENS SUNGLASSES</Link>
          <Link to='/catalog/womens-skincare'>SKINCARE</Link>
          <Link to='/catalog/womens-fragrances'>WOMENS FRAGRANCES</Link>
          </div>

          <div className="dropdown-tech">
            <h1>TECH</h1>
          <Link to='/catalog/womens-laptops'>LAPTOPS</Link>
          <Link to='/catalog/womens-smartphones'>SMARTPHONES</Link>
          </div>

          <div className="dropdown-image">
            <DropDownImage image={dropVisual} title='EYEWEAR'/>
            <DropDownImage image={dropVisual2} title='FOOTWEAR'/>
          </div>
        </div>
        </div>

        <div className="menu-item">
        <Link to='/catalog/men' >Men</Link>

        <div className="dropdown">
        <div className="dropdown-mens-clothing">
            <h1>CLOTHING</h1>
            <Link to='/catalog/womens-shirts'>MENS SHIRTS</Link>
          </div>
        

        <div className="dropdown-mens-shoes">
            <h1>SHOES</h1>
          <Link to='/catalog/mens-shoes'>MENS SHOES</Link>
          </div>

          <div className="dropdown-mens-acessoaries">
            <h1>ACCESOARIES</h1>
          <Link to='/catalog/mens-accessoaries'>MENS WATCHES</Link>
          <Link to='/catalog/mens-accessoaries-sunglasses'>MENS SUNGLASSES</Link>
          <Link to='/catalog/mens-accessoaries-fragrances'>MENS FRAGRANCES</Link>
          </div>

          <div className="dropdown-tech">
            <h1>TECH</h1>
          <Link to='/catalog/mens-laptops'>LAPTOPS</Link>
          <Link to='/catalog/mens-smartphones'>SMARTPHONES</Link>
          </div>

          <div className="dropdown-image">
            <DropDownImage image={mensVisual} title='EYEWEAR'/>
            <DropDownImage image={mensVisual2} title='WATCHES'/>
          </div>

          
        </div>
    </div>
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

        <Link to='/register'>Sign up</Link>
    </div>
  </div>
}