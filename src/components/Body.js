/*

* Body
  - Search
  - RestContainer
  * RestCard
     - Image
     - Name of rest, Star rating, cuisine, delivery time 
     
*/

import RestCard from "./RestCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import restList from "../utils/restList";

const Body = () => {
    // const [listOfRest, setListOfRest] = useState(restList);
    const [listOfRest, setListOfRest] = useState([]);

    const [filteredRest, setFilteredRest] = useState([]);

    const [searchText, setSearchText] = useState("");

    // console.log("Body Rendered");

    useEffect(() => {
        // console.log("useEffect Called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        // Optional Chaining
        // const lastCardIndex = json?.data?.cards.length - 1;
        setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional Rendering
    // if (listOfRest.length === 0) {
    //     // return <h1>Loading ...</h1>
    //     return <Shimmer />
    // }

    // console.log("Body rendered Called");

    // Local State Variable - Super powerful variable
    // const [listOfRest] = useState();
    // const [listOfRest] = useState([]);
    // const [listOfRest] = useState(nul);
    // const [listOfRest] = useState([{}]);
    // const [listOfRest, setListOfRest] = useState([
    //     {
    //         "info": {
    //             "id": "3369",
    //             "name": "Truffles",
    //             "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    //             "locality": "St. Marks Road",
    //             "areaName": "St. Marks Road",
    //             "costForTwo": "₹450 for two",
    //             "cuisines":
    //                 [
    //                     "American",
    //                     "Desserts",
    //                     "Continental",
    //                     "Italian"
    //                 ],
    //             "avgRating": 3.6,
    //             "sla": {
    //                 "deliveryTime": 29,
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-10 00:00:00"
    //             },
    //         }
    //     },

    //     {
    //         "info": {
    //             "id": "3368",
    //             "name": "KFC",
    //             "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    //             "locality": "Greater Noida",
    //             "areaName": "Sector 62, Panosis Society",
    //             "costForTwo": "₹450 for two",
    //             "cuisines":
    //                 [
    //                     "American",
    //                     "Desserts",
    //                     "Continental",
    //                     "Italian"
    //                 ],
    //             "avgRating": 4.7,
    //             "sla": {
    //                 "deliveryTime": 30,
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-10 00:00:00"
    //             },
    //         }
    //     },

    //     {
    //         "info": {
    //             "id": "3367",
    //             "name": "Swiggy",
    //             "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    //             "locality": "Greater Noida",
    //             "areaName": "Sector 71, Gokuldham Society",
    //             "costForTwo": "₹450 for two",
    //             "cuisines":
    //                 [
    //                     "American",
    //                     "Desserts",
    //                     "Continental",
    //                     "Italian"
    //                 ],
    //             "avgRating": 5,
    //             "sla": {
    //                 "deliveryTime": 21,
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-10 00:00:00"
    //             },
    //         }
    //     }
    // ]);

    // Normal JS Variable
    // let listOfRest;
    // let listOfRest = [];
    // let listOfRest = nul;
    // let listOfRest = [
    //     {
    //         "info": {
    //             "id": "3369",
    //             "name": "Truffles",
    //             "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    //             "locality": "St. Marks Road",
    //             "areaName": "St. Marks Road",
    //             "costForTwo": "₹450 for two",
    //             "cuisines":
    //                 [
    //                     "American",
    //                     "Desserts",
    //                     "Continental",
    //                     "Italian"
    //                 ],
    //             "avgRating": 3.6,
    //             "sla": {
    //                 "deliveryTime": 29,
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-10 00:00:00"
    //             },
    //         }
    //     },

    //     {
    //         "info": {
    //             "id": "3368",
    //             "name": "KFC",
    //             "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    //             "locality": "Greater Noida",
    //             "areaName": "Sector 62, Panosis Society",
    //             "costForTwo": "₹450 for two",
    //             "cuisines":
    //                 [
    //                     "American",
    //                     "Desserts",
    //                     "Continental",
    //                     "Italian"
    //                 ],
    //             "avgRating": 4.7,
    //             "sla": {
    //                 "deliveryTime": 30,
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-10 00:00:00"
    //             },
    //         }
    //     },

    //     {
    //         "info": {
    //             "id": "3367",
    //             "name": "Swiggy",
    //             "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    //             "locality": "Greater Noida",
    //             "areaName": "Sector 71, Gokuldham Society",
    //             "costForTwo": "₹450 for two",
    //             "cuisines":
    //                 [
    //                     "American",
    //                     "Desserts",
    //                     "Continental",
    //                     "Italian"
    //                 ],
    //             "avgRating": 5,
    //             "sla": {
    //                 "deliveryTime": 21,
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-10 00:00:00"
    //             },
    //         }
    //     }
    // ];

    // Conditional Rendering 
    return listOfRest.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box" type="text" placeholder="Search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        // Filter the restaurant cards and update the UI
                        // SearchText
                        console.log(searchText);
                        const filteredRest = listOfRest.filter((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        // setListOfRest(filteredRest);
                        setFilteredRest(filteredRest);
                    }}>Search</button>
                    <button className="filter-btn" onClick={() => {
                        console.log("Button Clicked");
                        //Filter logic here
                        const filteredList = listOfRest.filter((rest) => rest.info.avgRating > 4.3);
                        setListOfRest(filteredList);

                        // listOfRest = listOfRest.filter((rest) => rest.info.avgRating > 3.6);
                        // console.log(listOfRest);
                    }}>
                        Top Restaurants
                    </button>
                </div>
            </div>
            <div className="restContainer">
                {/* restCard  */}

                {   /* Good practice is using map filter reduce */
                    filteredRest.map((rest) => (
                        <Link key={rest.info.id} to={"/city/bangalore/" + rest.info.id}>
                            <RestCard restData={rest} />
                        </Link>)
                    )
                    // listOfRest.map((rest) => (<RestCard key={rest.info.id} restData={rest} />))
                    // listOfRest != null && listOfRest.map((rest) => (<RestCard key={rest.info.id} restData={rest} />))

                    // We must use key under map filter reduce method of JavaScript because React doesn't uniquely identify the RestCard. 
                    // It will re-render all the restCard once again. 
                    // Because for react all the restCard are same so we use key over here to identify uniquely. 

                    // restList.map((rest, index) => (<RestCard key={index} restData={rest} />))
                    /* But react itself says that can't use index as the key */
                    // Note -> Not using index as key (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice).
                }
                {/* 
          => Not a good practice 
          <RestCard restData={restList[0]} />
          <RestCard restData={restList[1]} />
          <RestCard restData={restList[2]} />
          <RestCard restData={restList[3]} />
          <RestCard restData={restList[4]} />
          <RestCard restData={restList[5]} />
          <RestCard restData={restList[6]} />
          <RestCard restData={restList[7]} />
          <RestCard restData={restList[8]} />
          <RestCard restData={restList[9]} />
          <RestCard restData={restList[10]} />
          <RestCard restData={restList[11]} />
          <RestCard restData={restList[12]} />
          <RestCard restData={restList[13]} />
          <RestCard restData={restList[14]} />
          <RestCard restData={restList[15]} /> 

          */}
                {/*<RestCard restData={restList[16]} />     { /* Can't fatch data because there are total 16 object under restList json  */}

                {/*<RestCard restName="KFC" cuisine="Veg/Non-Veg Fast Food, All types" starRatting="4.4 star" time="38 minutes" />
                  <RestCard restName="Rolls King," cuisine="Veg/Non-Veg Kabab Rolls, Extra Cheese Rolls" starRatting="4.4 star" time="38 minutes" />
                  <RestCard restName="Swiggy" cuisine="Kadhai Panir, Paneer Butter Masala, Garlic Naan Bread" starRatting="4.4 star" time="38 minutes" />
                  <RestCard restName="Zomato" cuisine="Breakfast, Lunch, Dinner" starRatting="4.4 star" time="38 minutes" />
                  <RestCard restName="Domino's" cuisine="Various varieties Pizza" starRatting="4.4 star" time="38 minutes" />
                  <RestCard restName="Pizza Hut" cuisine="Crispy and crunchy" starRatting="4.4 star" time="38 minutes" />
                  <RestCard restName="Hungry Point" cuisine="Home made taste" starRatting="4.4 star" time="38 minutes" /> */}
            </div>

        </div>
    )
}

export default Body;
