import { useEffect, useRef, useState } from 'react';
import './search.css';
import { useSearchByTitle } from '../../api-hooks/api-hooks';
import CatalogItem from '../main-catalog/catalog-item/CatalogItem';

export default function Search({isSearchOpen, onToggle}) {

    const [searchInput, setSearchInput] = useState("");
    const [searchProducts, setSearchProducts] = useState([]);
    const {searchByTitle} = useSearchByTitle();
    const modalRef = useRef();

    useEffect(() => {
        const clickOutside = (event) => {
            if(isSearchOpen && modalRef.current && !modalRef.current.contains(event.target)){
                onToggle()
            }
        };
        document.addEventListener('mousedown', clickOutside);
        return () => {
          document.removeEventListener('mousedown', clickOutside);
        };
    },[isSearchOpen,onToggle]);

    useEffect(() => {
        if(searchInput.trim() === ''){
            setSearchProducts([]);
            return
        }
        setSearchProducts([])
        searchByTitle(searchInput)
        .then(setSearchProducts)
    },[searchInput])
  return <>
  <div className='modal-container'>
  <div className={`search-modal ${isSearchOpen ? 'open' : ''}`} ref={modalRef}>
    <div className='search-modal-container'>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 24 24">
        <path d="M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
        </svg>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} placeholder="Search for products..." autoFocus />
<button className="search-close-btn" onClick={onToggle}>✕</button>
  </div>
  <hr className="right-details-first-break" />
  <div className='search-products'>
  {searchProducts.length !== 0 ? searchProducts.map((product) => <div key={product.id} onClick={() => {
    onToggle();
setSearchInput('')
  }}><CatalogItem  product={product}/></div> ): 
    <div className='search-none'>
      <p>No results could be found</p>
      <button onClick={()=>setSearchInput('')}>New Search</button>
      </div>}
  </div>

</div>
  </div>
  </>
}