import React from "react";
import "./featuredProperties.css";
import burkhanov from "../../images/burkhanov.jpg";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={burkhanov} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Nairobi</span>
        <span className="fpPrice">Starting from 15,000 KSh</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={burkhanov} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Nairobi</span>
        <span className="fpPrice">Starting from 15,000 KSh</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={burkhanov} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Nairobi</span>
        <span className="fpPrice">Starting from 15,000 KSh</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={burkhanov} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Nairobi</span>
        <span className="fpPrice">Starting from 15,000 KSh</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
