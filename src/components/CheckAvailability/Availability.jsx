import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./availability.css";
import {
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { Flex} from '@chakra-ui/react';
import { getAllRoomAvailable } from '../../services/room-service';
import Room from '../Room/Room';

const Availability = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  const [data,setData] = useState([]);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const { auth } = useAuth();

  const handleSearch = (fromTime,toTime) =>{
    const duration = {
      from : new Date(fromTime),
      to : new Date(toTime)
    };
    getAllRoomAvailable(id, duration).then((res)=>{
      setData(res.data.data);
    })
  }
  console.log(data)
  return (
    <div>
    <div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">FULL BOOKING</span>
      </Link>
    </div>
  </div>
  <div className="header">
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header-search-text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header-search-item">
                <button className="header-btn" onClick={handleSearch.bind(this, format(date[0].startDate, "MM/dd/yyyy"), format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                ))}>
                  Check availability
                </button>
              </div>
            </div>
          </div>
          <Flex gap={"10px"} wrap="wrap">
          {data.map(room => {
            return (
                <Room room={room}/>
            )
          })}
        </Flex>
        </div>

        
            
      
  );
};

export default Availability;