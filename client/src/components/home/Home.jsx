import './home.css'

import TopContainer from '../top-container/TopContainer';
import MiddleContainer from '../middle-container/MiddleContainer';
import BestSellerContainer from '../best-seller-container/BestSellerContainer';
import MenWomenContainer from '../men-women-container/MenWomenContainer';


export default function Home() {

   
  return <div className="home-container">
    <TopContainer />
    <MiddleContainer />
    <BestSellerContainer />
    <MenWomenContainer />
    

    


  </div>;
}