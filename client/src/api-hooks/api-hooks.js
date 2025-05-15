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

export const useGetAllWomensItems = () => {
  const getAllWomenItems = async () => {
    try {
      const categories = await api.get(`/products/categories`);
      const res = categories.data;
      const womensCategories = res.filter(category => category.slug.startsWith('womens-'));
    const allProductsResponse = womensCategories.map(cat => api.get(`/products/category/${cat.slug}`));
    const resAll = await Promise.all(allProductsResponse);
    const allResult = resAll.flatMap((product) => product.data.products);
    console.log(allResult);
    } catch (err) {
      console.error("Failed to fetch womens products: " + err.message);
      return [];
    }
  };
  return {getAllWomenItems}
};
