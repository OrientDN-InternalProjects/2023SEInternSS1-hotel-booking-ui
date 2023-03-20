import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PopularHotel from "../../components/Hotel/PopularHotel";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PopularCity from "../../components/PopularCity/PopularCity";
import "./home.css";

const Home = () => {
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
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">Popular cities</h1>
        <PopularCity />
        <h1 className="homeTitle">Best favorite hotels</h1>
        <PopularHotel/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
