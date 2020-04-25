import axios from 'axios';

const instance = axios.create({
    baseURL:'https://online-burger-order.firebaseio.com/'
});

export default instance;