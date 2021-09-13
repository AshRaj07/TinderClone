//Axios make http work smooth
import axios from "axios"

const instance = axios.create({
    baseURL:'https://tinder-cl0n3-backend.herokuapp.com/'
})

export default instance;