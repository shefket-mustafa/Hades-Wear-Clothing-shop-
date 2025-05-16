import { useEffect, useState } from 'react';
import { useGetAllMensItems } from '../../api-hooks/api-hooks';
import './menMainCatalog.css'

import MenCatalogItem from './men-catalog-item/MenCatalogItem';

export default function MenMainCatalog() {

    const {getAllMensItems} = useGetAllMensItems();
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllMensItems()
        .then(items => setAllProducts(items))
    },[]);


  return <div className="men-main-catalog">

    <div className="top-men-catalog">
        <h1>EVERYTHING A MAN NEEDS ✨</h1>
    </div>
    <div className="men-main-catalog-sort-filter">

        <div className="show-filters">
        <svg xmlns="http://www.w3.org/2000/svg" height='20px' fill="none" viewBox="0 0 24 24" strokeWidth={1.} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>
            <button><p>Show Filters</p></button>
        </div>

        <div className="sort">
            <p className='sort-by'>Sort by</p>
            <div className='sort-by-button'>
            <button>
                <p className='best-selling-p'>Best Selling</p>
                </button>
             <svg xmlns="http://www.w3.org/2000/svg" height='15px' fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
            </div>
        </div>

    </div>

    <div className='men-catalog-items-container'>
        {allProducts.map(product => <MenCatalogItem key={product.id} product={product} />)}
        </div>

  </div>;
}