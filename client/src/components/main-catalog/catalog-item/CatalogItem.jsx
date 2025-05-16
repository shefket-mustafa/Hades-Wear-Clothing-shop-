import './catalogItem.css'

export default function CatalogItem({product}) {
  return <div className='catalog-item'>
    <div className='catalog-item-img'>
    <img src={product.images[0]} alt={product.title} />
    </div>
    <div className='catalog-item-p'>
    <p style={{fontWeight: '300'}}>{product.title}</p>
    <p style={{fontWeight: '600'}}>{product.price}</p>
    </div>
    <div>
        </div>
  </div>;
}