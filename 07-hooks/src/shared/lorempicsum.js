import axios from 'axios';



export default axios.create({
    baseURL: `https://picsum.photos/v2/list?limit=9`,
});