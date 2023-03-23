import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState(0);



  const handleRoomType = (event) => {
    setOptions(event.target.value)
  }

  console.log(options)

  const navigate = useNavigate();

  const handleSearch = (fromTime, toTime) => {
    if (fromTime >= toTime) {
      alert("please choose a valid duration");
    }
  else {
    navigate(`/hotels/${destination}/${format(date[0].startDate,"yyyy-MM-dd")}/${format(date[0].endDate, "yyyy-MM-dd")}/${options}`, { state: { destination, date, options } });
    if (!destination)
    {
      navigate(`/hotels/${format(date[0].startDate,"yyyy-MM-dd")}/${format(date[0].endDate, "yyyy-MM-dd")}/${options}`, { state: { destination, date, options } });
    }
  }
  };


  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container list-mode" : "header-container"
        }
      >
        <div className="header-list">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header-title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="desc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="header-btn">Sign in / Register</button>
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header-search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
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
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <Select color={"black"} defaultValue={options} onChange={handleRoomType}>
                    <option name="single" value={0} className="option-item">
                      Single
                    </option>
                    <option name="double" value={1} className="option-item">
                      Double
                    </option>
                    <option name="triple" value={2} className="option-item">
                      Triple
                    </option>
                  </Select>
              </div>
              <div className="header-search-item">
                <button className="header-btn" onClick={handleSearch.bind(this, format(date[0].startDate, "MM/dd/yyyy"), format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                ))}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
