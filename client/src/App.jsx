import Header from "./components/header-nav/Header"
import CounterHeader from "./components/counter-header/CounterHeader"
import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from "react-router";
import Scroll from "./components/scroll-ontop/Scroll.jsx";
import RedLine from "./components/home/red-line/RedLine.jsx";
import MainCatalog from "./components/main-catalog/MainCatalog.jsx";
import { useGetAllWomensItems } from "./api-hooks/api-hooks-women.js";
import { useEffect, useMemo, useState } from "react";
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

  const womensDresses = useMemo(() => {
    return allWomenProducts.filter(product => product.category?.endsWith('dresses'))
  },[allWomenProducts])

  const womensShoes = useMemo(() => {
    return allWomenProducts.filter(product => product.category?.endsWith('shoes'))
  },[allWomenProducts])

  const womensBags = useMemo(() => {
    return allWomenProducts.filter(product => product.category?.endsWith('bags'))
  },[allWomenProducts])

  const womensWatches = useMemo(() => {
    return allWomenProducts.filter(product => product.category?.endsWith('watches'))
  },[allWomenProducts]);

  const womensJewellery = useMemo(() => {
    return allWomenProducts.filter(product => product.category?.endsWith('jewellery'))
  },[allWomenProducts]);

  const womensFragrances = useMemo(() => {
    return allSkincareAndFragrance.filter(product => product.category?.endsWith('fragrances'))
  },[allSkincareAndFragrance])

   const womensSkincare = useMemo(() => {
    return allSkincareAndFragrance.filter(product => product.category?.endsWith('skincare'))
   },[allSkincareAndFragrance]);

   const womensLaptops = useMemo(() => {
    return allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('laptops'))
   },[allLaptopsAndSmartPhones]);

   const womensSmartphones = useMemo(() => {
    return allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('smartphones'))
   },[allLaptopsAndSmartPhones]);

   const mensShirts = useMemo(() => {
    return allMenProducts.filter(product => product.category?.endsWith('shirts'));
  }, [allMenProducts]);
  
  const mensShoes = useMemo(() => {
    return allMenProducts.filter(product => product.category?.endsWith('shoes'));
  }, [allMenProducts]);
  
  const mensWatches = useMemo(() => {
    return allMenProducts.filter(product => product.category?.endsWith('watches'));
  }, [allMenProducts]);
  
  const mensFragrances = useMemo(() => {
    return allSkincareAndFragrance.filter(product => product.category?.endsWith('fragrances'));
  }, [allSkincareAndFragrance]);
  
  const mensLaptops = useMemo(() => {
    return allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('laptops'));
  }, [allLaptopsAndSmartPhones]);
  
  const mensSmartphones = useMemo(() => {
    return allLaptopsAndSmartPhones.filter(product => product.category?.endsWith('smartphones'));
  }, [allLaptopsAndSmartPhones]);
  




  

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
      <Route path="/catalog/womens-dresses" element={<MainCatalog  allProducts={womensDresses}/>}/>
      <Route path="/catalog/womens-shoes" element={<MainCatalog  allProducts={womensShoes}/>}/>
      <Route path="/catalog/womens-bags" element={<MainCatalog  allProducts={womensBags}/>}/>
      <Route path="/catalog/womens-watches" element={<MainCatalog  allProducts={womensWatches}/>}/>
      <Route path="/catalog/womens-jewellery" element={<MainCatalog  allProducts={womensJewellery}/>}/>
      <Route path="/catalog/womens-sunglasses" element={<MainCatalog  allProducts={allSunglasses}/>}/>
      <Route path="/catalog/womens-fragrances" element={<MainCatalog  allProducts={womensFragrances}/>}/>
      <Route path="/catalog/womens-skincare" element={<MainCatalog  allProducts={womensSkincare}/>}/>
      <Route path="/catalog/womens-laptops" element={<MainCatalog  allProducts={womensLaptops}/>}/>
      <Route path="/catalog/womens-smartphones" element={<MainCatalog  allProducts={womensSmartphones}/>}/>

      <Route path="/catalog/men" element={<MainCatalog  allProducts={allMenProducts}/>}/>
      <Route path="/catalog/mens-accessoaries-sunglasses" element={<MainCatalog  allProducts={allSunglasses}/>}/>
      <Route path="/catalog/mens-shirts" element={<MainCatalog  allProducts={mensShirts}/>}/>
      <Route path="/catalog/mens-shoes" element={<MainCatalog  allProducts={mensShoes}/>}/>
      <Route path="/catalog/mens-watches" element={<MainCatalog  allProducts={mensWatches}/>}/>
      <Route path="/catalog/mens-fragrances" element={<MainCatalog  allProducts={mensFragrances}/>}/>
      <Route path="/catalog/mens-laptops" element={<MainCatalog  allProducts={mensLaptops}/>}/>
      <Route path="/catalog/mens-smartphones" element={<MainCatalog  allProducts={mensSmartphones}/>}/>

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
