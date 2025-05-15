import './womenCatalogItem.css'

export default function WomenCatalogItem({product}) {
  return <div className='women-catalog-item'>
    <img src={product.images[0]} alt={product.title} />
    <p>{product.title}</p>
    <p>{product.price}</p>
  </div>;
}