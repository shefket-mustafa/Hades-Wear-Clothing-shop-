import Header from "./components/header-nav/Header"
import CounterHeader from "./components/counter-header/CounterHeader"
import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from "react-router";


function App() {

  return (
    <>
      <CounterHeader />
      <Header />

    <Routes>
      <Route path="/" element={<Home />}/>

    </Routes>
      <Footer />
    </>
  )
}

export default App
