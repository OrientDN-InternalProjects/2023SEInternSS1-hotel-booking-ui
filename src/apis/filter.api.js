import axios from "axios";
const filterHotel = (data) => 
{
    return axios.post('https://localhost:7137/api/Hotel/fiters-hotel', data)

}

export  {
    filterHotel,
}