import axios from "axios";
import { BASE_URL } from "../constants";

const signIn = async (credentials) => 
{
    return await axios.post(`${BASE_URL}/Account/login`,credentials,
    );

}

export const axiosPrivate = axios.create({
    baseURL : BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export {
    signIn
}