import { axiosClient } from "./axiosClient.js";

const getProduct = async ({sortType, page, limit}) => {

    const queryLimit = limit === "all" ? '': `limit=${limit}`
    const res = await axiosClient.get(`/product?sortType=${sortType}&page=${page}&${queryLimit}`);
    // console.log(res);

    return res.data;
}   

export {getProduct}