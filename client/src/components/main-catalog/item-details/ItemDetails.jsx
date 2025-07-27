import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProductById } from "../../../api-hooks/api-hooks";
import "./itemDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { selectItemDetails, setItemDetails } from "../../../redux/slices/itemDetailsSlice";
import { addToCart } from "../../../redux/slices/cartSlice";


export default function ItemDetails({setAddPop}) {
  const productDetails = useSelector(selectItemDetails)
  const [descriptionClicked, setDescriptionClicked] = useState(true);
  const [availabilityClicked, setavAilabilityClicked] = useState(false);
  const [dimensionsClicked, setDimensionsClicked] = useState(false);
  const [sizeButtonClicked, setSizeButtonClicked] = useState('');
  const { getProductById } = useGetProductById();
  const { id } = useParams();
  const dispatch = useDispatch();

  const descriptionSetter = () =>{
    setDescriptionClicked( prev => !prev);
  }

  const availabilitySetter = () =>{
    setavAilabilityClicked( prev => !prev);
  }

  const dimensionsSetter = () =>{
    setDimensionsClicked( prev => !prev);
  }

  const addToCartHandler = (product, size) => {
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    };
    dispatch(addToCart({product, size}))
    }

  useEffect(() => {
    getProductById(id)
    .then((productDetails) => {dispatch(setItemDetails(productDetails));
      
    });
  }, [id]);

  let sizeButtons = [];

  const category = productDetails.category?.toLowerCase() || '';

  if(category.endsWith('sunglasses')){
    sizeButtons = ['OS']
  } else if(category.endsWith('watches')){
    sizeButtons = ['38mm','40mm','42mm'];
  } else if(category.endsWith('fragrances')){
    sizeButtons = ['50ml','75ml','100ml']
  } else if (category.endsWith('laptops')){
    sizeButtons = ['13"', '14"', '15"', '17"'];
  } else if (category.endsWith('womens-shoes')){
    sizeButtons = ['35','36','37','38','39', '40']
  } else if (category.endsWith('mens-shoes')){
    sizeButtons = ['39', '40', '41', '42', '43', '44'];
  } else if (category.endsWith('smartphones')){
    sizeButtons = ['64GB', '128GB', '256GB', '512GB'];
  } else {
    sizeButtons = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  };

  return (
    <div className="details-container">
      <div className="left-details-container">
        <div className="left-details-img">
          {productDetails.images ? (
            <img src={productDetails.images[0]} alt={productDetails.title} />
          ) : (
            <p>Loading..</p>
          )}
        </div>

        <div className="right-details-container">
          {productDetails.images ? (
            <img src={productDetails.images[1]} alt={productDetails.title} />
          ) : (
            <p>Loading..</p>
          )}
          {productDetails.images ? (
            <img src={productDetails.images[2]} alt={productDetails.title} />
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </div>

      <div className="right-details-tab">
        <p className="details-title">{productDetails.title}</p>

        <div className="right-details-shipping">
          <p className="details-price">{productDetails.price}€</p>
          <div className="right-details-shipping-cont">
            <p className="right-details-free-shipping">FREE SHIPPING</p>
          </div>
        </div>
        <p className="details-sku">{productDetails.sku}</p>

        <hr className="right-details-first-break" />

        <div className="right-details-size-add-freesh">
          <span>Size</span>

          <div className="right-details-sizes">
          {sizeButtons.map((size) => (
            <button 
            key={size} 
            onClick={()=>setSizeButtonClicked(size)} className={sizeButtonClicked === size ? 'active-size-btn' : 'size-btn'}>{size}
            </button>
          ))}
        
      
          </div>

          <div className="add-to-cart-container">
            <button onClick={() => {
              if (sizeButtonClicked === '') {
                alert("Please select a size.");
                return;
              }
              addToCartHandler(productDetails,sizeButtonClicked)
              setSizeButtonClicked('')
              setAddPop(true)
              setTimeout(() => {
                setAddPop(false)
              },1500)
              setTimeout(() => {})
            }} className="add-to-cart">ADD TO CART</button>
          </div>

          <div className="for-my-mum">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="45px"
              viewBox="0 0 24 44"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
            <p>
              JUST FOR YOU <br /> FREE SHIPPING <br /> ON ORDERS OVER €59
            </p>

          </div>
        </div>

        <div className="right-tab-share">
          <p>Share:</p>
          <a href="https://www.facebook.com/" target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.06 0 265.36 0c-73.14 0-121 44.38-121 124.72v70.62H89.09V288h55.27v224h100.17V288z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 190.6c-41.9 0-75.7-33.8-75.7-75.7s33.8-75.7 75.7-75.7 75.7 33.8 75.7 75.7-33.8 75.7-75.7 75.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.1-54.6-44.3-98.7-98.9-98.8H98.9C44.3 65.7.1 109.8 0 164.4v183.2c.1 54.6 44.3 98.7 98.9 98.8h248.7c54.6-.1 98.7-44.3 98.8-98.9V164.5zm-48.6 183.2c0 27.1-21.9 49-49 49H98.9c-27.1 0-49-21.9-49-49V164.4c0-27.1 21.9-49 49-49h248.7c27.1 0 49 21.9 49 49v183.2z"/>
            </svg>
          </a>
          <a href="https://www.x.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
            <path d="M512 32L352 192l160 288H352L192 320 32 480H0L160 320 0 32h160l160 160L480 32z"/>
            </svg>
          </a>
          <a href="https://uk.pinterest.com/" target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 496 512" fill="currentColor">
            <path d="M248 8C111 8 0 119 0 256c0 104.4 67.1 193.2 161 230.1-2.2-19.5-4.2-49.5.9-70.8 4.6-19.5 29.4-124 29.4-124s-7.4-14.7-7.4-36.5c0-34.2 19.8-59.7 44.5-59.7 21 0 31.2 15.8 31.2 34.7 0 21.2-13.5 53-20.4 82.5-5.8 24.4 12.3 44.4 36.4 44.4 43.7 0 77.4-46.1 77.4-112.7 0-58.8-42.3-100.1-102.8-100.1-70.1 0-111.2 52.6-111.2 107 0 21.2 8.2 43.9 18.4 56.2 2 2.4 2.3 4.6 1.7 7.1-.6 2.5-1.9 8.4-2.4 10.8-.8 3.5-3.7 4.8-6.9 3.5-19.3-7.9-31.4-32.7-31.4-62.9 0-42.6 35.9-93.5 107.1-93.5 57.2 0 94.9 41.4 94.9 85.7 0 58.6-32.4 102.4-80.3 102.4-15.7 0-30.4-8.5-35.4-18.5 0 0-8.4 33.1-10.1 39.3-3.7 13.5-13.5 30.3-20.1 40.5 15.1 4.7 31.2 7.3 47.9 7.3 137 0 248-111 248-248S385 8 248 8z"/>
            </svg>
          </a>
        </div>

        <hr className="right-details-first-break" />

        <div className="right-tab-description" >
            <div className="description-title-container" onClick={descriptionSetter}>
          <p  className="details-description-title">Description</p>
          <svg className={`arrow ${descriptionClicked ? "open" : ""}`} xmlns="http://www.w3.org/2000/svg" width='20px' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
            </svg>
            </div>
             
            
            <div className={`details-dropdown-content ${descriptionClicked ? "open" : ""}`}>
                {descriptionClicked ? 
                <div className="details-description-div">{productDetails.description}</div> : ''}
             </div>  
        </div>

        <hr className="right-details-first-break" />

        <div className="right-tab-dimensions" >
            <div className="dimensions-title-container" onClick={dimensionsSetter}>
          <p className="details-description-title">Dimensions</p>
          <svg className={`arrow ${dimensionsClicked ? "open" : ""}`} xmlns="http://www.w3.org/2000/svg" width='20px' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
            </svg>
            </div>
        <div className={`dimensions-dropdown-content ${dimensionsClicked ? "open" : ""}`}>

        <div className="details-dimensions">
          <div className="details-dimensions-conts">
          <p>Width</p>
          {productDetails.dimensions?.width}
          </div>

          <div className="details-dimensions-conts">
          <p>Height</p>
          {productDetails.dimensions?.height}
          </div>

          <div className="details-dimensions-conts">
          <p>Depth</p>
          {productDetails.dimensions?.depth}
          </div>
        </div>
        </div>
        </div>

        <hr className="right-details-first-break" />

        <div className="details-availability">
  <div className="availability-title-container" onClick={availabilitySetter}>
    <p className="details-description-title">Availability</p>
    <svg className={`arrow ${availabilityClicked ? "open" : ""}`} xmlns="http://www.w3.org/2000/svg" width='20px' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
    </svg>
  </div>

  <div className={`availability-dropdown-content ${availabilityClicked ? "open" : ""}`}>
    <div className="details-availability-info">
      {productDetails.availabilityStatus}
    </div>
  </div>
</div>


      </div>
    </div>
  );
}
