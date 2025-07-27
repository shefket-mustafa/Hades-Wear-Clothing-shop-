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
import { useGetLaptopsAndPhones, useGetSkincareAndFragrances, useGetSunglasses } from "./api-hooks/api-hooks.js";
import Search from "./components/search-modal/Search.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalCartQuantity } from "./redux/slices/cartSlice.js";
import { setAllMenItems, setAllWomenItems, setLaptopsAndSmartPhones, setSkincareAndFragrance, setSunglasses } from "./redux/slices/productSlice.js";
import {Suspense, lazy} from 'react'

const ItemDetails = lazy(() => import('./components/main-catalog/item-details/ItemDetails.jsx'))
const Cart = lazy(() => import('./components/cart/Cart.jsx'));
const Register = lazy(() => import('./components/auth/register/Register.jsx'))
const NotFound = lazy(() => import('./components/not-found/NotFound.jsx'))



function App() {

  const {getAllWomenItems} = useGetAllWomensItems();
  const {getAllMensItems} = useGetAllMensItems();
  const {getSunglasses} = useGetSunglasses();
  const {getSkincareAndFrangrances} = useGetSkincareAndFragrances();
  const {getLaptopsAndPhones} = useGetLaptopsAndPhones();

  const allWomenProducts = useSelector(state => state.product.allWomenItems)
  const allMenProducts = useSelector(state => state.product.allMenItems)
  const allSunglasses = useSelector(state => state.product.sunglasses)
  const allSkincareAndFragrance = useSelector(state => state.product.skincareAndFragrance)
  const allLaptopsAndSmartPhones = useSelector(state => state.product.laptopsAndSmartPhones);
  const totalCartQuantity = useSelector(selectTotalCartQuantity);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [addPop, setAddPop] = useState(false);
  const [removePop, setRemovePop] = useState(false);
  const dispatch = useDispatch();
  

  useEffect(() => {
      getAllWomenItems()
      .then(items => dispatch(setAllWomenItems(items)))
  },[]);
  useEffect(() => {
    getAllMensItems()
    .then(items => dispatch(setAllMenItems(items)))
},[]);

useEffect(() => {
  getSunglasses()
  .then(sunglasses => dispatch(setSunglasses(sunglasses)))
},[]);

useEffect(() => {
  getSkincareAndFrangrances()
  .then(items => dispatch(setSkincareAndFragrance(items)))
},[]);

useEffect(() => {
  getLaptopsAndPhones()
  .then(items => dispatch(setLaptopsAndSmartPhones(items)))
},[]);

  
    const removeFromCart = (id, size) => {
      dispatch(removeFromCart({id, size}))
    };
    
    const toggleSearch = () => {
      setIsSearchOpen(prev => !prev);
    };
    
    const changeQuantity = (id, size, newQuantity) => {
      dispatch(changeQuantity({id,size,newQuantity}))
      }
      
      
      return (
        <>
    <Scroll />
    <Search isSearchOpen={isSearchOpen} onToggle={toggleSearch}/>
    
      <CounterHeader />
      <Header cartLength = {totalCartQuantity} isSearchOpen={isSearchOpen} onToggle={toggleSearch} addPop={addPop} removePop={removePop}/>

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

      <Route 
      path="/catalog/:id/details" 
      element={
      <Suspense fallback = {<div>Loading...</div>}>
      <ItemDetails setAddPop={setAddPop} />
      </Suspense>
      }/>

      <Route path="/cart"
      element={
      <Suspense fallback =  {<div>Loading...</div>}>
      <Cart setRemovePop={setRemovePop}/>
      </Suspense>
      
      }/>

      <Route path="/register" element={
      <Suspense fallback = {<div>Loading...</div>}>
      <Register/>
      </Suspense>
      }/>


      <Route path="*" element={
      <Suspense fallback ={<div>Loading...</div>} >
      <NotFound/>
      </Suspense>
      } />
    </Routes>
    <RedLine />
      <Footer />
    
    </>
  )
}


export default App
