import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestMenu = () => {

    const [restInfo, setRestInfo] = useState(null);

    const { restID } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + restID);

        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    };

    if (restInfo === null) {
        return (<Shimmer />)
    }

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {console.log(itemCards)}
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price / 100}
                    </li>))}
            </ul>
        </div>
    )
};

export default RestMenu;