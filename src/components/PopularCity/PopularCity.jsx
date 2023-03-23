import { Box } from "@chakra-ui/react";
import "./popular-city.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PopularCity = () => {

  // const [destination, setDestination] = useState("");
  
  // const navigate = useNavigate();
  // const handleSearch = (value) => {s
  //   navigate("/hotels", { state: { value } });
  // };
  const [destination, setDestination] = useState("Da nang");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState(0);
  const navigate = useNavigate()
  return (
    <div className="cities">
      <Box as={"button"} onClick={() => {
        navigate(`/hotel/${destination}`, {
          state: {
            destination,
          }
        })
      }}>
      <div  className="city-item">
        <img
          src="https://res.cloudinary.com/dmw2md0kg/image/upload/v1678781632/cau-vang-ba-na-hills_datduh.jpg"
          alt=""
          className="city-img"
        />
        <div className="city-titles">
          <h1>Da Nang</h1>
          <h2>Explore Now</h2>
        </div>
      </div>
      </Box>
 
      
      <div className="city-item">
        <img
          src="https://res.cloudinary.com/dmw2md0kg/image/upload/v1678781632/sunset-on-saigon-river_qxopmo.jpg"
          alt=""
          className="city-img"
        />
        <div className="city-titles">
          <h1>Ho Chi Minh</h1>
          <h2>Explore Now</h2>
        </div>
      </div>
      <div className="city-item">
        <img
          src="https://res.cloudinary.com/dmw2md0kg/image/upload/v1678781632/Thap_Rua_viqfcb.jpg"
          alt=""
          className="city-img"
        />
        <div className="city-titles">
          <h1>Ha Noi</h1>
          <h2>Explore Now</h2>
        </div>
      </div>
    </div>
  );
};

export default PopularCity;
