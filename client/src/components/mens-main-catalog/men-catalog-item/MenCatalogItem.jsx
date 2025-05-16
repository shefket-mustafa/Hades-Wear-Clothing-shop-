import './menCatalogItem.css'

export default function MenCatalogItem({product}) {
  return <div className='men-catalog-item'>
    <div className='men-item-img'>
    <img src={product.images[0]} alt={product.title} />
    </div>
    <div className='men-catalog-item-p'>
    <p>{product.title}</p>
    <p>{product.price}</p>
    </div>
    <div>
        </div>
  </div>;
}