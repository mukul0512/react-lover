// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import { useState } from "react";
// import { MENU_API } from "../utils/constants";

const RestMenu = () => {

    // const [restInfo, setRestInfo] = useState(null);

    const { restID } = useParams();

    const dummy = "Dummy Data";

    const restInfo = useRestMenu(restID);

    const [showIndex, setShowIndex] = useState(null);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + restID);

    //     const json = await data.json();
    //     console.log(json);
    //     setRestInfo(json.data);
    // };

    if (restInfo === null) {
        return (<Shimmer />)
    }

    const { name, cuisines, costForTwo } = restInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const { delivery } = restInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const brands = restInfo?.cards[6]?.card?.card?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent")
    // console.log(brands);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwo}</p>
            <p className="font-bold text-lg">{delivery}</p>
            {/* Brands accordions */}
            {brands.map((brand, index) => (
                //controlled component
                <RestCategory
                    key={brand?.card?.card?.title}
                    data={brand?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))}
        </div>
    )
};

export default RestMenu;