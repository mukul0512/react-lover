/* 

* RestCard
     - Image
     - Name of rest, Star rating, cuisine, delivery time

*/

import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

/* const RestCard = ({ restName, cuisine, starRatting, time }) => {  */  /* Destructured on the fly */
/*  const {restName, cuisine, starRatting, time} = props; */  /* Destructuring of object i.e. props */
const RestCard = (props) => {
    const { restData } = props;
    const {loggedInUser} = useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = restData?.info;
    const { deliveryTime } = restData?.info?.sla;
    const { nextCloseTime } = restData?.info?.availability;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        {/* <img className="restLogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/6dfd4982-fbe9-4188-95f1-548061c61f73_425575.JPG" alt="restLogo" /> */}
  
        {/* <img className="restLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + restData.info.cloudinaryImageId} alt="cloudinaryImageId" /> */}

        {/* named import of CDN_URL */}
        <img className="rounded-lg" src={CDN_URL+ cloudinaryImageId} alt="cloudinaryImageId" />

        {/* <img className="restLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} alt="cloudinaryImageId" /> */}
  
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{nextCloseTime} Date & Time</h4>
        <h4 className="font-extralight">User: {loggedInUser} </h4>
        {/* <h3>{restData.info.name}</h3> */}
        {/* <h4>{restData.info.cuisines.join(", ")}</h4> */}
        {/* <h4>{restData.info.avgRating} stars</h4> */}
        {/* <h4>{restData.info.costForTwo}</h4> */}
        {/* <h4>{restData.info.sla.deliveryTime} minutes</h4> */}
        {/* <h4>{restData.info.availability.nextCloseTime} Date & Time</h4> */}
      </div>
    )
  }

  // Higher Order Component

  // input - RestCard ==>> RestCardPromoted

  export const withPromotedLabel = (RestCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestCard {...props} />
        </div>
      );
    };
  };

  export default RestCard;