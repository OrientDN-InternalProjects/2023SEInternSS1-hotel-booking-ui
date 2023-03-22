import { useEffect, useState } from "react";
import BestFavoriteList from "../../components/BestFavoriteHotelList/BestFavoriteHotelList";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/NavBar/Navbar";
import PopularCity from "../../components/PopularCity/PopularCity";
import { getHotels } from "../../services/hotel-service";
import "./home.css";
import { Spinner } from '@chakra-ui/react';
import Footer from '../../components/Footer/Footer';

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

  // const [loading, setLoading] = useState(false);

  // const data = {
  //   "city": "DA NANG",
  //   "duration": {
  //     "from": "2023-03-04T08:15:56.412Z",
  //     "to": "2023-03-05T08:15:56.412Z"
  //   },
  //   "roomType": 1
  // };
  // const reFetch = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.post('https://localhost:7137/api/Hotel/fiters-hotel', data)
  //     console.log(res.data.data.hotel);
  //   } 
  //   catch (err) {
  //     console.log(err);
  //   } 
  //   setLoading(false);
  // };
  // // reFetch();
  // useEffect(() => {
  //   reFetch();
  // }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
      <h1 className="homeTitle">Popular cities</h1>
        <PopularCity />
        {
          !loading ? <Spinner /> : <BestFavoriteList headerContent="Best Favorite Hotels" hotelsData={data} />
        }
        <MailList/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
