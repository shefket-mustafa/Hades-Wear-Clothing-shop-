import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

export const useGetAllMensItems = () => {
    const getAllMensItems = async () => {
      try {
        const categories = await api.get(`/products/categories`);
        const res = categories.data;
        const mensCategories = res.filter(category => category.slug.startsWith('mens-'));
      const allProductsResponse = mensCategories.map(cat => api.get(`/products/category/${cat.slug}`));
      const resAll = await Promise.all(allProductsResponse);
      const allResult = resAll.flatMap((product) => product.data.products);
      console.log(allResult);
      return allResult;
      } catch (err) {
        console.error("Failed to fetch mens products: " + err.message);
        return [];
      }
    };
    return {getAllMensItems}
  };