import { useEffect, useState } from 'react';
import { useGetAllWomensItems } from '../../api-hooks/api-hooks';
import './WomenMainCatalog.css'
import WomenCatalogItem from './women-catalog-item/WomenCatalogItem';

export default function WomenMainCatalog() {

    const {getAllWomenItems} = useGetAllWomensItems();
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllWomenItems()
        .then(items => setAllProducts(items))
    },[]);


  return <div className="women-main-catalog">

    <div className="top-women-catalog">
        <h1>EVERYTHING A WOMAN NEEDS ✨</h1>
    </div>
    <div className="women-main-catalog-sort-filter">

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

    <div className='women-catalog-items-container'>
        {allProducts.map(product => <WomenCatalogItem key={product.id} product={product} />)}
        </div>

  </div>;
}