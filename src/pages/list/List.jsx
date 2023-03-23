import "./list.css";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
import { getHotelByFilter } from "../../services/hotel-service";
import { Spinner } from '@chakra-ui/react'
import Navbar from "../../components/Navbar/Navbar";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  
  // const {data, loading, error, refetch} = useFetch(`https://localhost:7137/api/Hotel/fiters-hotel?from=${format(
  //   date[0].startDate,"yyyy-MM-dd")}&to=${format(date[0].endDate, "yyyy-MM-dd")}&city=${destination}&roomType=${options}`)
  // console.log(data);

  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  
    useEffect(() =>{
    setLoading(true);
    console.log(destination);
    console.log(format(date[0].startDate,"yyyy-MM-dd"));
    console.log(format(date[0].endDate, "yyyy-MM-dd"));
    console.log(options);
    getHotelByFilter(destination,format(date[0].startDate,"yyyy-MM-dd"),format(date[0].endDate, "yyyy-MM-dd"),options).then((res) => setData(res.data.data));
    setLoading(false);
  },[]);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          {loading ? (
              <Spinner   thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl' />
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item.id} />
                ))}
              </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
