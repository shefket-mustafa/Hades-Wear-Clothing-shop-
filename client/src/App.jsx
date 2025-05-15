import Header from "./components/header-nav/Header"
import CounterHeader from "./components/counter-header/CounterHeader"
import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from "react-router";
import WomenMainCatalog from "./components/women-main-catalog/WomenMainCatalog.jsx";
import Scroll from "./components/scroll-ontop/Scroll.jsx";


function App() {

  return (
    <>
    <Scroll />
      <CounterHeader />
      <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catalog/women" element={<WomenMainCatalog />}/>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
      <Footer />
    </>
  )
}

export default App
