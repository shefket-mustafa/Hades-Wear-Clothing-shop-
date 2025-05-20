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
import { useGetSunglasses } from "./api-hooks/api-hooks.js";



function App() {

  const {getAllWomenItems} = useGetAllWomensItems();
  const {getAllMensItems} = useGetAllMensItems();
  const {getSunglasses} = useGetSunglasses();
  const [allWomenProducts, setAllWomenProducts] = useState([]);
  const [allMenProducts, setAllMenProducts] = useState([]);
  const [allSunglasses, setAllSunglasses] = useState([]);

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



  return (
    <>
    <Scroll />
      <CounterHeader />
      <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catalog/women" element={<MainCatalog allProducts={allWomenProducts}/>}/>
      <Route path="/catalog/womens-accessoaries-sunglasses" element={<MainCatalog  allProducts={allSunglasses}/>}/>
      <Route path="/catalog/men" element={<MainCatalog  allProducts={allMenProducts}/>}/>
      <Route path="/catalog/mens-accessoaries-sunglasses" element={<MainCatalog  allProducts={allSunglasses}/>}/>
      
      <Route path="/catalog/:id/details" element={<ItemDetails/>}/>


      <Route path="/register" element={<Register/>}/>


      <Route path="*" element={<NotFound />} />
    </Routes>
    <RedLine />
      <Footer />
    </>
  )
}

export default App
