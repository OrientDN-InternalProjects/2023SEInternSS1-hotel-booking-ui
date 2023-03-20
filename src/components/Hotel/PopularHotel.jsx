import { useEffect, useState } from "react";
import { getHotels } from "../../services/get";
import "./popular-hotel.css";

const PopularHotel = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect(() =>{
    setLoading(true);
    getHotels().then((res) => setData(res.data.data));
    console.log(data);
    setLoading(false);
  },[]);


  return (
    <div className="hotels">
           {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                 <div className="hotel-item" key={item.id}>
                 <img
                   src={item.urls[0]}
                   alt=""
                   className="hotel-img"
                 />
                 <span className="hotel-name">{item.hotelName}</span>
                 <span className="hotel-city">{item.address.city}</span>
                 {item.rating && <div className="hotel-rating">
                   <button>{item.rating}</button>
                   <span>Excellent</span>
                 </div>}
               </div>
                ))}
              </>
            )}
    </div>
  );
};

export default PopularHotel;
