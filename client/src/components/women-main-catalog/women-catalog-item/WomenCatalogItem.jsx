import './womenCatalogItem.css'

export default function WomenCatalogItem({product}) {
  return <div className='women-catalog-item'>
    <div className='women-item-img'>
    <img src={product.images[0]} alt={product.title} />
    </div>
    <div className='women-catalog-item-p'>
    <p>{product.title}</p>
    <p>{product.price}</p>
    </div>
    <div>
        </div>
  </div>;
}