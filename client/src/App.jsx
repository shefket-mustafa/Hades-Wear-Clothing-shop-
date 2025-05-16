import Header from "./components/header-nav/Header"
import CounterHeader from "./components/counter-header/CounterHeader"
import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from "react-router";
import Scroll from "./components/scroll-ontop/Scroll.jsx";
import RedLine from "./components/home/red-line/RedLine.jsx";
import MainCatalog from "./components/main-catalog/MainCatalog.jsx";
import { useGetAllWomensItems } from "./api-hooks/api-hooks-women.js";
import { useEffect, useState } from "react";
import { useGetAllMensItems } from "./api-hooks/api-hooks-men.js";


function App() {

  const {getAllWomenItems} = useGetAllWomensItems();
  const {getAllMensItems} = useGetAllMensItems();
  const [allWomenProducts, setAllWomenProducts] = useState([]);
  const [allMenProducts, setAllMenProducts] = useState([]);

  useEffect(() => {
      getAllWomenItems()
      .then(items => setAllWomenProducts(items))
  },[]);
  useEffect(() => {
    getAllMensItems()
    .then(items => setAllMenProducts(items))
},[]);

  return (
    <>
    <Scroll />
      <CounterHeader />
      <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catalog/women" element={<MainCatalog heading='WOMEN' allProducts={allWomenProducts}/>}/>
      <Route path="/catalog/men" element={<MainCatalog heading='MEN' allProducts={allMenProducts}/>}/>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    <RedLine />
      <Footer />
    </>
  )
}

export default App
