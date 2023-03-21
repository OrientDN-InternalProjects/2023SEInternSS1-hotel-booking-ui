import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import "./FavoriteHotel.css";
import { Link } from "react-router-dom";
import StarIcon from "../../icons/cases/StarIcon";

const FavoriteHotel = ({ hotelData }) => {
  return (
    <Link to={`/hotel/${hotelData.id}`}>
      <Grid
        h="280px"
        w="380px"
        templateColumns="repeat(2, 1fr)"
        display="inline-grid"
        cursor="pointer"
        className="hotel-item"
        marginLeft="30px"
      >
        <GridItem>
          <AspectRatio ratio={2 / 3} w={190}>
            <Image
              src={hotelData.urls[0] || ".assets/image-none.jpg"}
              alt="Image hotel"
              borderRadius="20px"
              w='190px'
              h='100%'
            />
          </AspectRatio>
        </GridItem>
        <GridItem marginLeft={"10px"}>
            <Box className="hotel-category" marginBottom={"5px"}>
              {hotelData.hotelName || "None"}
            </Box>
            <Box className="hotel-rating" >
              <StarIcon />
              <span>{hotelData.rating ? hotelData.rating.toFixed(0) : 0}</span>
            </Box>
          <Box>
            <Box
              className="hotel-title"
            >
             {hotelData.address.streetNumber} - {hotelData.address.building} - {hotelData.address.district} - {hotelData.address.city}
            </Box>
          </Box>
         
        </GridItem>
      </Grid>
    </Link>
  );
};

export default FavoriteHotel;
