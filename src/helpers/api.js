import axios from 'axios'

const axiosURL = axios.create({ baseURL: 'http://localhost:3977/' })
export default axiosURL