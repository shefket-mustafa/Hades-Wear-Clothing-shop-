// GET all products

import axios from "axios";



const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000
})

export const useGetBestSellers = () => {

    const getBestSellers = async () => {
        const response1 = await api.get(`/products/category/mens-shirts`);
        const response2 = await api.get(`/products/category/mens-shoes`);
        const response3 = await api.get(`/products/category/mens-watches`);

        const productsPromise = Promise.all([response1,response2,response3])
        const products = (await productsPromise).flatMap(res => res.data.products)
        const sorted = products.sort((a,b) => b.rating - a.rating);
        const newSorted = sorted.slice(0,4);

        return newSorted;
    }

    return {getBestSellers}
}