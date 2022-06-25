import axios from "axios";

const httpClientService = axios.create();

httpClientService.defaults.baseURL = "https://localhost:3000/";
// axiosService.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer: ${token}`;

export default httpClientService;
