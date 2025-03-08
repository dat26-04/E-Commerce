import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000, // Optional: Set timeout
    headers: {
      'Content-Type': 'application/json'
    }
});
  