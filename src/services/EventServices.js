import axios from 'axios';

const clientApi = axios.create({
    baseURL: 'https://my-json-server.typicode.com/caastech/testjsonserver/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return clientApi.get('/events');
    }
}