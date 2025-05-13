import './dropdown-images.css';

export default function DropDownImage({image, title}) {
  return <div className='dropdown-image-comp'>
  <img src={image} alt="Image loading..." />
  <h1>{title}</h1>
  </div>
}