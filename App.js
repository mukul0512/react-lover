/*

* Header
  - Logo
  - NavItems
-----------------------------
* Body
  - Search
  - RestContainer
  * RestCard
     - Image
     - Name of rest, Star rating, cuisine, delivery tie 
-----------------------------  
* Footer
  - Copyright
  - Links
  - Address
  - Contact

*/

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=87&t=st=1720367870~exp=1720368470~hmac=167972146782708850090cf16efa9392e4b626c8ae8217a9236ea725779d8c22" alt="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

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

      <img className="restLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} alt="cloudinaryImageId" />

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

// The json data will the list of object and each object represent a restaurant.
// const restObj = [{

// }, {

// }, {

// }]

// -------------------------------------------------------

const restList = [
  {
    "info": {
      "id": "3369",
      "name": "Truffles",
      "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
      "locality": "St. Marks Road",
      "areaName": "St. Marks Road",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "American",
        "Desserts",
        "Continental",
        "Italian"
      ],
      "avgRating": 4.6,
      "parentId": "218065",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=15151716~p=1~adgrpid=15151716#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3369~eid=b0cea6b8-8491-4c8e-8412-fd48e18aeb89~srvts=1720499764997~collid=45995",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-10 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textExtendedBadges": {

          },
          "textBased": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.5",
          "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=3369",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "812598",
      "name": "Cafe Amudham",
      "cloudinaryImageId": "e76fc212e4d3f5baf2119e1642463380",
      "locality": "Gandhinagar",
      "areaName": "Majestic",
      "costForTwo": "₹246 for two",
      "cuisines": [
        "South Indian",
        "Snacks"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "396620",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-10 00:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "description": "OnlyOnSwiggy"
                }
              }
            ]
          },
          "textExtendedBadges": {

          },
          "textBased": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=812598",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "471009",
      "name": "Virinchi Cafe",
      "cloudinaryImageId": "yiu5hkb4fqwhtftmmq8v",
      "locality": "Residency Road",
      "areaName": "Ashok Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "Fast Food",
        "fastfood"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "282713",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "description": "",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=471009",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "748103",
      "name": "Thenga Manga by Chef Pillai",
      "cloudinaryImageId": "2d77b522e8d5845b1f4a72fa68bb5d18",
      "locality": "Brigade Road",
      "areaName": "Central Bangalore",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Chinese",
        "Biryani"
      ],
      "avgRating": 4,
      "parentId": "447109",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 23:59:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=748103",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "4046",
      "name": "Sri Udupi Park",
      "cloudinaryImageId": "tfbnpd65irvhp9iwhbtk",
      "locality": "Residency Road",
      "areaName": "Central Bangalore",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Chaat",
        "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "4284",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=15151726~p=2~adgrpid=15151726#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4046~eid=902aed9b-e9be-4d44-a902-c297c1b9baf1~srvts=1720499764997~collid=45995",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=4046",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "53490",
      "name": "Palmgrove Ballal Residency",
      "cloudinaryImageId": "wf83wrssazu2prtt7rss",
      "locality": "Ashok Nagar",
      "areaName": "Ashok Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "Coastal",
        "Desserts",
        "Jain",
        "South Indian"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "154066",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 21:30:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=53490",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "10844",
      "name": "Hotel Chandrika",
      "cloudinaryImageId": "bjsywjtbostst0h5cojy",
      "locality": "Cunningham Road",
      "areaName": "Vasanth Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Juices",
        "Chaat",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "parentId": "21636",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 21:45:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {

          },
          "textBased": {

          },
          "imageBased": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹45",
        "discountTag": "POCKET HERO",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.9",
          "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=10844",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "615499",
      "name": "Krishnam Veg",
      "cloudinaryImageId": "kjim0tzroudoxttsljjp",
      "locality": "Nanjappa Circle",
      "areaName": "AUSTIN TOWN",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Indian",
        "Desserts",
        "Snacks"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "367084",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=615499",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "12808",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "pdod4o1em9potwsd22rs",
      "locality": "Wilson Garden",
      "areaName": "Shanti Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=15155832~p=3~adgrpid=15155832#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=12808~eid=75409b88-9a44-4ec0-bc2e-f15a1d80accd~srvts=1720499764997~collid=45995",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                  "description": "Delivery!"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
              },
              {
                "attributes": {
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "description": "OnlyOnSwiggy"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=12808",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "335405",
      "name": "IDC Kitchen",
      "cloudinaryImageId": "v8jgifosg3vdzrgsv1sw",
      "locality": "Sampangirama Nagar",
      "areaName": "Sampangirama Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "Indian"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "105824",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 21:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=335405",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "836274",
      "name": "Chalukya Samrat Cafe Since 1977",
      "cloudinaryImageId": "7a5d73bfc2f0b293750e0497fddacc63",
      "locality": "Central Bangalore",
      "areaName": "Central Bangalore",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Cafe",
        "Fast Food",
        "Indian",
        "Chinese"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "496536",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {

          },
          "textBased": {

          },
          "imageBased": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "25% OFF",
        "subHeader": "UPTO ₹65"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=836274",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "759153",
      "name": "Namma Kudla Veg",
      "cloudinaryImageId": "f1bc9ddf53de574cdc35ab2f717df234",
      "locality": "1st temple street",
      "areaName": "Malleshwaram",
      "costForTwo": "₹199 for two",
      "cuisines": [
        "South Indian",
        "Beverages",
        "Sweets"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "448611",
      "avgRatingString": "4.6",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 21:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=759153",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "533773",
      "name": "Third Wave Coffee",
      "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
      "locality": "Lavelle Road",
      "areaName": "Ashok Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
      ],
      "avgRating": 4.6,
      "parentId": "274773",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "promoted": true,
      "adTrackingId": "cid=15152848~p=6~adgrpid=15152848#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=533773~eid=b7382570-ee6d-476b-9fb8-d5e3acd63dc4~srvts=1720499764997~collid=45995",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-10 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {

          },
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                  "description": "Delivery!"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=533773",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "727936",
      "name": "SRI VISHNU PARK",
      "cloudinaryImageId": "026ff739178ac6c8844046156308f529",
      "locality": "kh road",
      "areaName": "Basavanagudi",
      "costForTwo": "₹299 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "194856",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 22:30:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {

          },
          "textBased": {

          },
          "imageBased": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=727936",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "719639",
      "name": "New Udupi Upahar",
      "cloudinaryImageId": "b14cd9fc40129fcfb97aa7e621719d07",
      "locality": "Shivashankar Plaza",
      "areaName": "Central Bangalore",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Tandoor",
        "Chaat",
        "Beverages"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "14579",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {

          },
          "textBased": {

          },
          "imageBased": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=719639",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "70008",
      "name": "Sangam Sweets",
      "cloudinaryImageId": "bti5cqzjlftzrw0uml1k",
      "locality": "Majestic",
      "areaName": "Majestic",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "North Indian",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "805",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-09 22:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textExtendedBadges": {

          },
          "textBased": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=70008",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
];

var keyCount = Object.keys(restList).length;
console.log(keyCount);

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
      <div className="restContainer">
        {/* restCard  */}

        {
          // We must use key under map filter reduce method of JavaScript because React doesn't uniquily identify the RestCard. 
          // It will re-render all the restCard once again. 
          // Because for react all the restCard are same so we use key over here to identify uniquely. 

          // Note -> Not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice).
          restList.map((rest) => (<RestCard key={rest.info.id} restData={rest} />)) /* Good practice of using map filter reduce */

        // restList.map((rest, index) => (<RestCard key={index} restData={rest} />)) /* But react itself says that can't use index as the key */
        }

        {/* Not a good practice  */}
        {/* <RestCard restData={restList[0]} />
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
        <RestCard restData={restList[15]} /> */}
        {  /* <RestCard restData={restList[16]} />     { /* Can't fatch data because there are total 16 object under restList json  */}

        {/* <RestCard restName="KFC" cuisine="Veg/Non-Veg Fast Food, All types" starRatting="4.4 star" time="38 minutes" />
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

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      < Header />

      {/* Body */}
      < Body />

      {/* Footer */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);