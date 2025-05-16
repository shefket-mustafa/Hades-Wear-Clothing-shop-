import './menCatalogItem.css'

export default function MenCatalogItem({product}) {
  return <div className='men-catalog-item'>
    <div className='men-item-img'>
    <img src={product.images[0]} alt={product.title} />
    </div>
    <div className='men-catalog-item-p'>
    <p style={{fontWeight: '300'}}>{product.title}</p>
    <p style={{fontWeight: '600'}}>{product.price} €</p>
    </div>
    <div>
        </div>
  </div>;
}