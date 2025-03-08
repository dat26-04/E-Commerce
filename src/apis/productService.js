import { axiosClient } from "./axiosClient.js";

const getProduct = async () => {
    const res = await axiosClient.get("/product");
    // console.log(res);

    return res.data;
}   

export {getProduct}