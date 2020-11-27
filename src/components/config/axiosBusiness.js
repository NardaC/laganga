import axios from "axios";

const clienteAxiosBusiness = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL_BUSINESS
})

export default clienteAxiosBusiness;