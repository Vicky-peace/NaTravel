import React, { useState } from "react";
import "./header.css";
import { FaBed } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BsFillTaxiFrontFill, BsFillPersonFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

const handleOption = (name, operation) =>{
  setOptions((prev)=>{
    return{
      ...prev,
       [name]: operation === "i" ? options[name] + 1 : options[name] -1,
    }
   
})
}

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <MdFlight />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <AiFillCar />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FaBed />
            <span>Attraction</span>
          </div>
          <div className="headerListItem">
            <BsFillTaxiFrontFill />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Infinite Deals ? It's Genius</h1>
        <h2>🛫 Seamless Planning: </h2>
        <p className="headerDesc">
          Our user-friendly platform is designed to simplify your travel
          planning. From browsing dreamy destinations to booking your flights,
          accommodations, and activities, we've got you covered.
        </p>
        <button className="headerBtn">Sign in / Sign up</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FaBed className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <SlCalender className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")}   to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )} `}{" "}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <BsFillPersonFill className="headerIcon" />
            <span
            onClick={() =>setOpenOptions (!openOptions)}
            
            className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
           { openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionsCounter">
                <button
                  disabled= {options.adult <= 1}
                className="optionCounterButton" onClick={() => handleOption("adult","d")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={() => handleOption("adult","i")}>+</button>
                </div>
               
              </div>
            
            
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionsCounter">
                <button
                disabled= {options.children <= 1}
                 className="optionCounterButton" onClick={() => handleOption("children","d")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton" onClick={() => handleOption("children","i")}>+</button>
                </div>
                
              </div>
            
      
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionsCounter">
                <button 
                  disabled= {options.room <= 1}
                className="optionCounterButton" onClick={() => handleOption("room","d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton" onClick={() => handleOption("room","i")}>+</button>
                </div>
               
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
