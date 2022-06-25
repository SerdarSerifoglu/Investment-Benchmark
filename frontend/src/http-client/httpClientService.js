import axios from "axios";

const axiosService = axios.create();

axiosService.defaults.baseURL = ""; //"https://test.herokuapp.com/api";
// axiosService.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer: ${token}`;

export default axiosService;
