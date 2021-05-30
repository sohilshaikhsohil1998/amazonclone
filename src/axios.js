//axios is used for request like post get // axios is fetching library
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-22057/us-central1/api' //The Api (cloude function url) Url
});

export default instance;