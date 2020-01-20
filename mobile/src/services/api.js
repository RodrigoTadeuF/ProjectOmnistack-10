import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.90.110.148:3333'
})

export default api