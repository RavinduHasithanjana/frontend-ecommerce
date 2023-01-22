import axios from 'axios';

 const instance = axios.create({
     baseURL: 'http://173.82.235.105:3009'
});

export default instance;
