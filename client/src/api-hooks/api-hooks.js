import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

export const useGetBestSellers = () => {
  const getBestSellers = async () => {
    try {
      const response1 = await api.get(`/products/category/mens-shirts`);
      const response2 = await api.get(`/products/category/mens-shoes`);
      const response3 = await api.get(`/products/category/mens-watches`);

      const response = Promise.all([response1, response2, response3]);
      const products = (await response).flatMap((res) => res.data.products);
      const sorted = products.sort((a, b) => b.rating - a.rating);
      const newSorted = sorted.slice(0, 4);

      return newSorted;
    } catch (err) {
      console.error("Failed to load bestsellers:", err);
      return [];
    }
  };
  return { getBestSellers };
};

export const useGetProductById = () => {

  const getProductById = async(productId) => {

    try{
      const response = await api.get(`/products/${productId}`)
      return response.data;
    }catch(err){
      console.error('Failed to load product: '+err.message)
    }
  }
  return {getProductById}
}

export const useGetSunglasses = () => {
  
  const getSunglasses = async () => {

    try{
      const response = await api.get('/products/category/sunglasses');
      return response.data.products;

    }catch(err){
      console.error("Failed to fetch sunglasses: "+err.message)
      return[];
    }
  }
  return {getSunglasses}
};

export const useGetSkincareAndFragrances = () => {

  const getSkincareAndFrangrances = async() => {

    try{

      const fragrances = await api.get(`/products/category/fragrances`);
      const skincare = await api.get(`/products/category/skincare`);
      
      const response = await Promise.all([fragrances, skincare]);
      
      const products = response.flatMap(res => res.data.products);
      return products;

    }catch(err){
      console.error('Couldn`t fetch products!: '+err.message)
      return [];
    }
  }

  return {getSkincareAndFrangrances}
};

export const useGetLaptopsAndPhones = () => {

  const getLaptopsAndPhones = async () => {

    try{
      const laptops = await api.get(`/products/category/laptops`);
      const smartphones = await api.get(`/products/category/smartphones`);

      const products = Promise.all([laptops,smartphones]);
      const response = (await products).flatMap(res => res.data.products);
      return response;

    }catch(err){
      console.error('Failed to fetch tech: '+err.message);
      return[]
    }
  }
  return {getLaptopsAndPhones}
}

export  const useSearchByTitle = () => {

  const searchByTitle = async (title) => {

    try{
      const response = await api.get(`/products/search?q=${title}`);
      
      return response.data.products;

    }catch(err){
      console.error(err.message);
      return[]
    }

  }
  return {searchByTitle}
}



