import { axiosClient } from "./axiosClient.js";

const addProductToCart = async (body) => {
    return await axiosClient.post(`/cart`, body);
}   
const getProductFromDatabase = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`)
}

const deleteProduct = async (productId, userId) => {
    return await axiosClient.delete(`/cart/deleteItem`, {
        data: { productId, userId }
    });
};

export {addProductToCart, getProductFromDatabase, deleteProduct}