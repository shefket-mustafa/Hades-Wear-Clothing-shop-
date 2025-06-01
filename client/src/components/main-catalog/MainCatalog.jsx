import CatalogItem from "./catalog-item/CatalogItem";
import "./mainCatalog.css";
import pugImg from "../../assets/images/error-404.jpg";
import { Link } from "react-router";
import { useState } from "react";

export default function MainCatalog({ allProducts }) {
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState(null);

  const filteredProducts = allProducts.filter(product => {
    return selectedCategory === 'All' || product.category.toLowerCase().includes(selectedCategory.toLowerCase())})
    .sort((a,b) => {
        switch(sortBy){
        case 'price-asc':
        return a.price - b.price;
        case 'price-desc':
        return b.price - a.price;
        case 'name-asc':
        return a.title.localeCompare(b.title)
        case 'name-desc':
        return b.title.localeCompare(a.title)
        default:
        return 0
        }
    })
  return (
    <div className="main-catalog">
      <div className="topcatalog">
        {/* <h1>EVERYTHING {heading} WOULD NEED ✨</h1> */}
        <hr className="right-details-first-break" />
      </div>
      <div className="main-catalog-sort-filter">
        <div className="show-filters">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
          <button>
            <select
            className="filter-select"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="All">All</option>
              <option value="Watches">Watches</option>
              <option value="Shoes">Shoes</option>
              <option value="Fragrances">Fragrances</option>
            </select>
          </button>
        </div>

        <div className="sort">
          <p className="sort-by">Sort by</p>
          <div className="sort-by-button">
            <button>
              <select
                className="sort-select"
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </button>
          </div>
        </div>
      </div>

      <div className="catalog-items-container">
        {filteredProducts.length === 0 ? (
          <div className="empty-catalog">
            <img src={pugImg} alt="Pug ran away" className="pug-image" />
            <h2>Oops! Our pug has eaten all the products and ran away!</h2>
            <p>Try checking back later or explore another category.</p>
            <Link to="/">Home Page</Link>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
