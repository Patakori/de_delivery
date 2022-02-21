import axios from "axios";


export const apiAxios = axios.create({
    baseURL: 'http://localhost:3000'
})