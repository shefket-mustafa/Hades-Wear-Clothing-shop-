
import { useEffect, useState } from "react";
import Bestsellers from "../bestsellers/Bestsellers";
import { useGetAllWomensItems, useGetBestSellers } from "../../../api-hooks/api-hooks";

export default function BestSellerContainer() {

    const [data, setData] = useState([]);
    const {getBestSellers} = useGetBestSellers();
    const {getAllWomenItems} = useGetAllWomensItems();

    useEffect(() => {
        getBestSellers()
        .then(products => {
            setData(products)
            
        });
    },[])

    useEffect(() => {
        getAllWomenItems()
        .then(products => {
            console.log(products);
        });
    },[])


  return <div className='bestseller-container'>
  <div className='title'><h1>BESTSELLERS</h1></div>
  <div className='bestsellers'>
  {data.map(product => <Bestsellers key={product.title} itemData={product}/>)}
  </div>
</div>;
}