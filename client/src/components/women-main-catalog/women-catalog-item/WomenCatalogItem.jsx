import './womenCatalogItem.css'

export default function WomenCatalogItem({product}) {
  return <div className='women-catalog-item'>
    <div className='women-item-img'>
    <img src={product.images[0]} alt={product.title} />
    </div>
    <div className='women-catalog-item-p'>
    <p style={{fontWeight: '300'}}>{product.title}</p>
    <p style={{fontWeight: '600'}}>{product.price}</p>
    </div>
    <div>
        </div>
  </div>;
}