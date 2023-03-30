import React from "react";
import Availability from "../../components/CheckAvailability/Availability";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
const Reserve = () =>
{
    const { auth } = useAuth();
    return (
    <div>
        <Availability />
        
    </div>)
}

export default Reserve;