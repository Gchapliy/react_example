import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ef32f.firebaseio.com/'
});

export default instance;