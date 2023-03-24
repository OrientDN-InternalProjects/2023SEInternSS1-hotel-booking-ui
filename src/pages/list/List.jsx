import "./list.css";
import Header from "../../components/Header/Header";
import { useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
import { getHotelByCity, getHotelByFilter } from "../../services/hotel-service";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Radio, RadioGroup, Spinner, Stack} from '@chakra-ui/react'
import Navbar from "../../components/navbar/Navbar";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [status, setStatus] = useState(true);
  const [selectedValue, setSelectedValue] = useState(String(Number(options)));

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() =>{
    setLoading(true);
    date ?
    getHotelByFilter(destination,format(date[0].startDate,"yyyy-MM-dd"),format(date[0].endDate, "yyyy-MM-dd"),options).then((res) => {
      res.data.isSuccess? setData(res.data.data) : setData(null);
    })
    :
    getHotelByCity(destination).then(res => setData(res.data.data))
    setLoading(false);
    
  },[date,options,destination]);
  console.log(status);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1000)
  }, [])

  const handleClick = () => {
    getHotelByFilter(destination,format(date[0].startDate,"yyyy-MM-dd"),format(date[0].endDate, "yyyy-MM-dd"),Number(selectedValue)).then((res) => setData(res.data.data));
    setLoading(false);
    
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
        {!date ? "" : <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text"  onChange={(e) => setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{!date ? "" : `${format(
                date[0]?.startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div>
              <label className="radio-label">
                <input type="radio" value="0" checked={selectedValue === '0'} onChange={handleOptionChange} />
                Single
              </label>
              <label className="radio-label">
                <input type="radio" value="1" checked={selectedValue === '1'} onChange={handleOptionChange} />
                Double
              </label>
              <label className="radio-label">
                <input type="radio" value="2" checked={selectedValue === '2'} onChange={handleOptionChange} />
                Triple
              </label>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          }
          <div className="listResult">
          {
             !data? (
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Your search failed</AlertTitle>
                <AlertDescription>Please try again!</AlertDescription>
              </Alert>
            ) :
             (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item.id} />
                ))}
              </>
            )
          }
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default List;
