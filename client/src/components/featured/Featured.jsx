import React from 'react'
import "./featured.css"
import hotel from "../../images/hotel.jpg"
import senrif from '../../images/senrif.jpg'
import burkhanov from "../../images/burkhanov.jpg"
const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src= {hotel} alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>Wanabros holdings</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src= {senrif} alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>Wanabros holdings</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src= {burkhanov} alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>Wanabros holdings</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured