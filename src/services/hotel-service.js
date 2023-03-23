import axios from "axios";
import { BASE_URL } from "../constants";
const getHotels =async () => 
{
    return await axios.get(`${BASE_URL}/Hotel/all-hotels`);

};

const getHotelDetails = async (id) => 
{
    return await axios.get(`${BASE_URL}/Hotel/get-hotel-by-id?id=${id}`);
}

const getHotelByFilter = async (city,from,to,type) => 
{
    return await axios.get(`${BASE_URL}/Hotel/fiters-hotel?from=${from}&to=${to}&city=${city}&roomType=${type}`);
}

const getHotelByCity = async (city) => {
    return await axios.get(`${BASE_URL}/Hotel/fiters-hotel?city=${city}`);
}

export  {
    getHotels,
    getHotelDetails,
    getHotelByFilter,
    getHotelByCity
}