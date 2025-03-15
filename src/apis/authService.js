import { axiosClient } from "./axiosClient";

const register = async (username, password) => {

    return await axiosClient.post("/register", {
        username, password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const signIn = async (username, password) => {

    return await axiosClient.post("/login", {
        username, password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const getInfo = async (userId) => {
    return await axiosClient.get(
        `/user/info/${userId}`
    )
}
export {register, signIn, getInfo};