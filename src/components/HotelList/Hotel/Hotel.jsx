import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { StarIcon } from "@chakra-ui/icons";

const Hotel = (
 {hotelData}) => {
 


  return (
    <Box className="column-layout">
      <Link to={`/hotel/details/${hotelData.id}`}>
        <Box className="column-item one">
          <AspectRatio ratio={2 / 3} w="150px">
            <Image
              src={hotelData.urls[0] || "./static-data/img-none.jpg"}
              borderRadius="20px"
              alt="Image book"
            />
          </AspectRatio>
        </Box>
      </Link>
      <Box className="column-item two">
        <VStack align="flex-start" spacing={4}>
          <HStack>
            <Box fontWeight="600" className="book-category">
              {hotelData.address.district}
            </Box>
            <Box fontWeight="600" className="book-category">
              {hotelData.address.building}
            </Box>
          </HStack>
          <Link to={`/hotel/details/${hotelData.id}`}>
            <VStack align="flex-start" spacing={3}>
              <Text
                marginLeft="0"
                mb={0}
                mt={0}
                fontSize="21px"
                fontWeight="bold"
                className="title"
              >
                {hotelData.hotelName}
              </Text>
              {/* {/* <HStack>
                <Text color="#755A7D" fontSize="14px">
                  {authors.map((item, key) => {
                    return <span key={key}>{item}</span>;
                  })}
                </Text>
                <Text lineHeight="12px">
                  <StarIcon />
                </Text>
                <Text fontWeight="bold">{rating.toFixed(1)}</Text>
              </HStack> */}
              <Text fontSize="14px">{hotelData.description}</Text> 
            </VStack>
          </Link>
        </VStack>
      </Box>
      <Box className="column-item three">
        <Text fontSize="26px" fontWeight="bold">
          {/* ${price} */}
        </Text>
      </Box>
    </Box>
  );
};

export default Hotel;