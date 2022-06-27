import axios from "axios";

const httpClientService = axios.create();

httpClientService.defaults.baseURL = "http://localhost:3000/api/";
// axiosService.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer: ${token}`;

export default httpClientService;
