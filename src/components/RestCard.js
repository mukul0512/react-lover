/* 

* RestCard
     - Image
     - Name of rest, Star rating, cuisine, delivery time

*/

import React from "react";
import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
  }

/* const RestCard = ({ restName, cuisine, starRatting, time }) => {  */  /* Destructured on the fly */
/*  const {restName, cuisine, starRatting, time} = props; */  /* Destructuring of object i.e. props */
const RestCard = (props) => {
    const { restData } = props;
  
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = restData?.info;
    const { deliveryTime } = restData?.info?.sla;
    const { nextCloseTime } = restData?.info?.availability;
    return (
      <div className="restCard" style={styleCard}>
        {/* <img className="restLogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/6dfd4982-fbe9-4188-95f1-548061c61f73_425575.JPG" alt="restLogo" /> */}
  
        {/* <img className="restLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + restData.info.cloudinaryImageId} alt="cloudinaryImageId" /> */}

        {/* named import of CDN_URL */}
        <img className="restLogo" src={CDN_URL+ cloudinaryImageId} alt="cloudinaryImageId" />

        {/* <img className="restLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} alt="cloudinaryImageId" /> */}
  
        {/* <h3>{restName}</h3> */}
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{nextCloseTime} Date & Time</h4>
        {/* <h3>{restData.info.name}</h3> */}
        {/* <h4>{restData.info.cuisines.join(", ")}</h4> */}
        {/* <h4>{restData.info.avgRating} stars</h4> */}
        {/* <h4>{restData.info.costForTwo}</h4> */}
        {/* <h4>{restData.info.sla.deliveryTime} minutes</h4> */}
        {/* <h4>{restData.info.availability.nextCloseTime} Date & Time</h4> */}
      </div>
    )
  }

  export default RestCard;