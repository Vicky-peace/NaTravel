import React from 'react'
import './header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className="headerList">
            <div className="headerListItem">
                <span>Stays</span>
            </div>
           
            <div className="headerListItem">
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
                <span>Accomodations</span>
                <div className="headerListItem">
                <span>Airport Taxis</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header