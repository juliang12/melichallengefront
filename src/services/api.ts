import { isAxiosError } from "axios";
import { api } from "../config/axios";
import { productAdapter, productDetailAdapter } from "../adapter/productAdapter";

export const fetchApi = () => ({
  getSearchResults: async (query: string) => {
    console.log(encodeURIComponent(query), 'value')
    try {
      const result = await api.get(`/items?q=${encodeURIComponent(query)}`);
      return productAdapter(result.data);
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  },

  getProductDetail: async (productId: string) => {
    try {
      const result = await api.get(`/items/${productId}`);
      return productDetailAdapter(result.data)
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  },

  getCategories: async (categoryId?: string) => {
    try {
      const result = await api.get(`/categories/${categoryId}`);
      return result.data
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  }
});
