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
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState(0);
  const navigate = useNavigate();

  const handleClick = (city) => {
      setDestination(city);
      console.log(destination);
      navigate(`/find-hotel/${city}`, {
        state: {
          destination,
        }
      })
  }
  
  return (
    <div className="cities">
      <Box as={"button"} onClick={() => {
        setDestination("ho chi minh");
        console.log(destination);
        navigate(`/find-hotel/${destination}`, {
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
 
      <Box as={"button"} onClick={handleClick.bind(this,"ho chi minh")}
      >
      <div className="city-item">
        <img
          src="https://res.cloudinary.com/dmw2md0kg/image/upload/v1678781632/sunset-on-saigon-river_qxopmo.jpg"
          alt=""
          className="city-img"
        />
        <div className="city-titles">
          <h1 id="hcm">Ho Chi Minh</h1>
          <h2>Explore Now</h2>
        </div>
      </div>
      </Box>

      <Box as={"button"} onClick={() => {
        setDestination("Ha Noi");
        console.log(destination);
        navigate(`/find-hotel/${destination}`, {
          state: {
            destination,
          }
        })
      }}>
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
      </Box>
    </div>
    
  );
};

export default PopularCity;
