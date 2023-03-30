import React from "react";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArrowRightIcon from "../icons/cases/ArrowRightIcon";
import FavoriteHotel from "./FavoriteHotel/FavoriteHotel";

const BestFavoriteList = ({ headerContent, hotelsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Container marginTop={8} maxW={"container.xl"}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom="32px"
      >
        <Box
          fontWeight="600"
          fontSize="24px"
          lineHeight="50px"
          className="slider-header"
          marginBottom="10px"
        >
          {headerContent}
        </Box>
        <Link to="/all">
          <Button
            variant="link"
            color="#8D28AD"
            fontSize="14px"
            display="flex"
            alignItems="center"
          >
            View more
            <ArrowRightIcon marginLeft="4px" />
          </Button>
        </Link>
      </Flex>
      <Slider {...settings}>
            {hotelsData.map((item) => {
                return (
                    <div>
                    <FavoriteHotel key={item.id} hotelData={item} />
                    </div>
                )
            })}
      </Slider>
    </Container>
  );
};

export default BestFavoriteList;