
// src/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getProducts() {
    return apiClient.get('/products');
  },
  getProduct(id: number) {
    return apiClient.get(`/products/${id}`);
  }
};
