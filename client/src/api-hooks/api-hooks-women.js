import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

export const useGetAllWomensItems = () => {
    const getAllWomenItems = async () => {
      try {
        const categories = await api.get(`/products/categories`);
        const res = categories.data;
        const womensCategories = res.filter(category => category.slug.startsWith('womens-'));
      const allProductsResponse = womensCategories.map(cat => api.get(`/products/category/${cat.slug}`));
      const resAll = await Promise.all(allProductsResponse);
      const allResult = resAll.flatMap((product) => product.data.products);
      return allResult;
      } catch (err) {
        console.error("Failed to fetch womens products: " + err.message);
        return [];
      }
    };
    return {getAllWomenItems}
  };