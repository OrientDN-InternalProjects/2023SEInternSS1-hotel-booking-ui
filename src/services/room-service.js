import axios from "axios";
import { BASE_URL } from "../constants";

const getAllRoomAvailable = async (idHotel, duration) => 
{
    return await axios.post(`${BASE_URL}/Hotel/get-all-rooms-available?idHotel=${idHotel}`,duration
    );

}

export {
    getAllRoomAvailable
}