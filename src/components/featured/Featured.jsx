import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/dmw2md0kg/image/upload/v1678781632/cau-vang-ba-na-hills_datduh.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Da Nang</h1>
          <h2>Explore Now</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/dmw2md0kg/image/upload/v1678781632/sunset-on-saigon-river_qxopmo.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ho Chi Minh</h1>
          <h2>Explore Now</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/dmw2md0kg/image/upload/v1678781632/Thap_Rua_viqfcb.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ha Noi</h1>
          <h2>Explore Now</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
