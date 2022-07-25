import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': 'd8f8f8f8f8msh8f8f8f8f8f8f8f8fp1b8b8b8jsn8f8f8f8f8f8f8', // use your own key
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlaces = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}