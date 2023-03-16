import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data, loading, error} = useFetch("https://localhost:7137/api/Hotel/all-hotels");
  // console.log(data);

  return (
    <div className="fp">
           {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                 <div className="fpItem" key={item.id}>
                 <img
                   src={item.urls[0]}
                   alt=""
                   className="fpImg"
                 />
                 <span className="fpName">{item.hotelName}</span>
                 <span className="fpCity">{item.address.city}</span>
                 {item.rating && <div className="fpRating">
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

export default FeaturedProperties;
