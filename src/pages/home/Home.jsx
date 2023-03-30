import { useEffect, useState } from "react";
import BestFavoriteList from "../../components/BestFavoriteHotelList/BestFavoriteHotelList";
import PopularCity from "../../components/PopularCity/PopularCity";
import { getHotels } from "../../services/hotel-service";
import "./home.css";
import { Box, Container, Flex, Spinner } from '@chakra-ui/react';
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() =>{
    setLoading(true);
    getHotels().then((res) => setData(res.data.data));
    setLoading(false);
  },[]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])

  return (
    <div>
      <Navbar />
      <Header check={false} />
      <div className="homeContainer">
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
          Popular cities
        </Box>
        </Flex>
        </Container>
        <PopularCity />
        {
          !loading ? 
          <Flex h={"700px"} color={"blue.400"} justifyContent={"center"} alignItems={"center"}>
          <Spinner  size={"lg"} />
          </Flex> 
          : <BestFavoriteList headerContent="Best Favorite Hotels" hotelsData={data} />
        }
        
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
