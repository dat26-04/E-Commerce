import { axiosClient } from "./axiosClient.js";

const addProductToCart = async (body) => {
    return await axiosClient.post(`/cart`, body);
}   
const getProductFromDatabase = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`)
}
export {addProductToCart, getProductFromDatabase}