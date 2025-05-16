import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useGetProductById } from "../../../api-hooks/api-hooks";
import "./itemDetails.css";

export default function ItemDetails() {
  const [productDetails, setProductDetails] = useState({});
  const { getProductById } = useGetProductById();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((productDetails) => {
      setProductDetails(productDetails);
    });
  }, [productDetails, getProductById, id]);

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
        <p>{productDetails.title}</p>

        <div className="right-details-shipping">
          <p>{productDetails.price}</p>
          <p>FREE SHIPPING</p>
        </div>
        <p>{productDetails.sku}</p>

        <div className="right-details-size-add-freesh">
          <div className="right-details-s-size">
            <p>Size</p>
            <button>S</button>
          </div>

          <div className="right-details-sizes">
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>

          <button>ADD TO CART</button>

          <button>FOR MY MUM FREE SHIPPING ON ORDERS OVER €59</button>
        </div>

        <div className="right-tab-share">
            <p>Share</p>
            <Link>FB</Link>
            <Link>Insta</Link>
            <Link>X</Link>
            <Link>Pinterest</Link>
        </div>

        <div className="right-tab-description">
            <p>Description</p>

            {productDetails.description}
        </div>
      </div>
    </div>
  );
}
