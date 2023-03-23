import "./hotel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Room from "../../components/Room/Room";
import { Flex, Spinner} from "@chakra-ui/react";
import { getHotelDetails } from "../../services/hotel-service";
import MailList from "../../components/MailList/MailList";
import Header from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  console.log(id);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect(() =>{
    setLoading(true);
    getHotelDetails(id).then((res) => setData(res.data.data));
    console.log(data);
    setLoading(false);
  },[]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1000)
  }, [])

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 3 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 3 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {!loading ? (
                  <Flex h={"700px"} color={"blue.400"} justifyContent={"center"} alignItems={"center"}>
                  <Spinner  size={"lg"} />
                  </Flex> 
      ) : 
      (
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data?.urls[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.hotelName}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data?.address?.streetNumber} - {data.address?.district} - {data.address?.city}</span>
          </div>
          <span className="hotelPriceHighlight">
          {data.rating}  ★
          </span>
          <div className="hotelImages">
            {data?.urls?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.hotelName}</h1>
              <p className="hotelDesc">
                {data.description}
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <Flex gap={"10px"} wrap="wrap">
          {data?.rooms?.map(room => {
            return (
                <Room room={room}/>
            )
          })}
        </Flex>
        <MailList />
      </div>
      )}
    </div>
  );
 };

export default Hotel;
