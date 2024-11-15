import axios from "axios";

const fetchApi = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    timeout:1000
});


export default fetchApi;