import axios from 'axios';

const API_KEY = '24040434-2670e9f575c0a33d230dceda3';
const URL  = 'https://pixabay.com/api';

export const getImages = (text,count) =>{
    try{
        const data = axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error);
    }
}