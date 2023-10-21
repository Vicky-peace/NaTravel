import React from "react";
import "./header.css";
import { FaBed } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BsFillTaxiFrontFill,BsFillPersonFill } from "react-icons/bs";
import {SlCalender} from 'react-icons/sl'
const Header = () => {
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
         
          Our user-friendly platform is designed to
          simplify your travel planning. From browsing dreamy destinations to
          booking your flights, accommodations, and activities, we've got you
          covered.
        </p>
        <button className="headerBtn">Sign in / Sign up</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FaBed className="headerIcon"/>
                <input type="text" placeholder="where are you going?" className="headerSearchInput"/>
            </div>
            <div className="headerSearchItem">
                <SlCalender className="headerIcon"/>
                <span className="headerSearchText">date t date</span>
            </div>
            <div className="headerSearchItem">
                <BsFillPersonFill className="headerIcon"/>
                <span className="headerSearchText">2 adults 2 children 1 room</span>
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
