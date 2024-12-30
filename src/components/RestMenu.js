// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
// import { MENU_API } from "../utils/constants";

const RestMenu = () => {

    // const [restInfo, setRestInfo] = useState(null);

    const { restID } = useParams();

    const restInfo = useRestMenu(restID);

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

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* Categories accordions */}
            {categories?.map((category) => (<RestCategory key={category?.card?.card?.title} data={category?.card?.card} />))}
        </div>
    )
};

export default RestMenu;