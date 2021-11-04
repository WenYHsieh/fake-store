import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export const getProducts = () => instance.get('products')
export const getProductsInCategory = (category) =>
  instance.get(`products/category/${category}`)
