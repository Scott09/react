import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3e996323695b7a122259127313f88083c0cba9d449177b124bc680427d82d156'
    }
});