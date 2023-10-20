import React from 'react'
import './header.css';
import {FaBed} from 'react-icons/fa'
import {MdFlight} from 'react-icons/md';
import {AiFillCar} from 'react-icons/ai'
import {BsFillTaxiFrontFill} from 'react-icons/bs'
const Header = () => {
  return (
    <div className='header'>
        <div className="headerList">
            <div className="headerListItem active">
           <FaBed/>
                <span>Stays</span>
            </div>
           
            <div className="headerListItem">
                <MdFlight/>
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <AiFillCar/>
                <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
                <FaBed/>
                <span>Attraction</span>
               
            </div>
            <div className="headerListItem">
                    <BsFillTaxiFrontFill/>
                <span>Airport Taxis</span>
            </div>
        </div>
    </div>
  )
}

export default Header