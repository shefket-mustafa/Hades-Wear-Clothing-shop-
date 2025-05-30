import Header from "./components/header-nav/Header"
import CounterHeader from "./components/counter-header/CounterHeader"
import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import { Route, Routes, useParams } from "react-router";
import Scroll from "./components/scroll-ontop/Scroll.jsx";
import RedLine from "./components/home/red-line/RedLine.jsx";
import MainCatalog from "./components/main-catalog/MainCatalog.jsx";
import { useGetAllWomensItems } from "./api-hooks/api-hooks-women.js";
import { useEffect, useState } from "react";
import { useGetAllMensItems } from "./api-hooks/api-hooks-men.js";
import ItemDetails from "./components/main-catalog/item-details/ItemDetails.jsx";
import NotFound from "./components/not-found/NotFound.jsx";
import Register from "./components/auth/register/Register.jsx";
import { useGetLaptopsAndPhones, useGetSkincareAndFragrances, useGetSunglasses } from "./api-hooks/api-hooks.js";
import Cart from "./components/cart/Cart.jsx";



function App() {

  const {getAllWomenItems} = useGetAllWomensItems();
  const {getAllMensItems} = useGetAllMensItems();
  const {getSunglasses} = useGetSunglasses();
  const {getSkincareAndFrangrances} = useGetSkincareAndFragrances();
  const {getLaptopsAndPhones} = useGetLaptopsAndPhones();

  const [allWomenProducts, setAllWomenProducts] = useState([]);
  const [allMenProducts, setAllMenProducts] = useState([]);
  const [allSunglasses, setAllSunglasses] = useState([]);
  const [allSkincareAndFragrance, setAllSkincareAndFragrance] = useState([]);
  const [allLaptopsAndSmartPhones, setAllLaptopsAndSmartPhones] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  

  useEffect(() => {
      getAllWomenItems()
      .then(items => setAllWomenProducts(items))
  },[]);
  useEffect(() => {
    getAllMensItems()
    .then(items => setAllMenProducts(items))
},[]);

useEffect(() => {
  getSunglasses()
  .then(sunglasses => setAllSunglasses(sunglasses))
},[]);

useEffect(() => {
  getSkincareAndFrangrances()
  .then(products => {
    setAllSkincareAndFragrance(products)})
},[]);

useEffect(() => {
  getLaptopsAndPhones()
  .then(products => {
    console.log(products);
    setAllLaptopsAndSmartPhones(products)})
},[]);

  const addToCartHandler = (product) => {
    setProductsInCart(products => [...products,product]);
  };

  return (
    <>
    <Scroll />
      <CounterHeader />
      <Header cartLength = {productsInCart.length}/>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catalog/women" element={<MainCatalog allProducts={allWomenProducts}/>}/>
      <Route path="/catalog/womens-accessoaries-sunglasses" element={<MainCatalog  allProducts={allSunglasses}/>}/>
      <Route path="/catalog/womens-dresses" element={<MainCatalog  allProducts={allWomenProducts.filter(product => product.category?.endsWith('dresses'))}/>}/>
      <Route path="/catalog/womens-shoes" element={<MainCatalog  allProducts={allWomenProducts.filter(product => product.category?.endsWith('shoes'))}/>}/>
      <Route path="/catalog/womens-bags" element={<MainCatalog  allProducts={allWomenProducts.filter(product => product.category?.endsWith('bags'))}/>}/>
      <Route path="/catalog/womens-watches" element={<MainCatalog  allProducts={allWomenProducts.filter(product => product.category?.endsWith('watches'))}/>}/>
      <Route path="/catalog/womens-jewellery" element={<MainCatalog  allProducts={allWomenProducts.filter(product => product.category?.endsWith('jewellery'))}/>}/>
      <Route path="/catalog/womens-sunglasses" element={<MainCatalog  allProducts={allSunglasses}/>}/>
      <Route path="/catalog/womens-fragrances" element={<MainCatalog  allProducts={allSkincareAndFragrance.filter(product => product.category?.endsWith('fragrances'))}/>}/>
      <Route path="/catalog/womens-skincare" element={<MainCatalog  allProducts={allSkincareAndFragrance.filter(product => product.category?.endsWith('skincare'))}/>}/>
      <Route path="/catalog/womens-laptops" element={<MainCatalog  allProducts={allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('laptops'))}/>}/>
      <Route path="/catalog/womens-smartphones" element={<MainCatalog  allProducts={allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('smartphones'))}/>}/>

      <Route path="/catalog/men" element={<MainCatalog  allProducts={allMenProducts}/>}/>
      <Route path="/catalog/mens-accessoaries-sunglasses" element={<MainCatalog  allProducts={allSunglasses}/>}/>
      <Route path="/catalog/mens-shirts" element={<MainCatalog  allProducts={allMenProducts.filter(product => product.category?.endsWith('shirts'))}/>}/>
      <Route path="/catalog/mens-shoes" element={<MainCatalog  allProducts={allMenProducts.filter(product => product.category?.endsWith('shoes'))}/>}/>
      <Route path="/catalog/mens-watches" element={<MainCatalog  allProducts={allMenProducts.filter(product => product.category?.endsWith('watches'))}/>}/>
      <Route path="/catalog/mens-fragrances" element={<MainCatalog  allProducts={allSkincareAndFragrance.filter(product => product.category?.endsWith('fragrances'))}/>}/>
      <Route path="/catalog/mens-laptops" element={<MainCatalog  allProducts={allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('laptops'))}/>}/>
      <Route path="/catalog/mens-smartphones" element={<MainCatalog  allProducts={allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('smartphones'))}/>}/>

      <Route path="/catalog/:id/details" element={<ItemDetails addToCartHandler={addToCartHandler} />}/>

      <Route path="/cart" element={<Cart cartItems={productsInCart}/>}/>


      <Route path="/register" element={<Register/>}/>


      <Route path="*" element={<NotFound />} />
    </Routes>
    <RedLine />
      <Footer />
    </>
  )
}

export default App
