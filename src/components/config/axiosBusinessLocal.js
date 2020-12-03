import axios from "axios";

const clienteAxiosBusinessLocal = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL_BUSINESS_LOCAL
})

export default clienteAxiosBusinessLocal;