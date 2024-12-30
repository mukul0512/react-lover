import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestMenu = (restID) => {
const [restInfo, setRestInfo] = useState(null); 
    // fetch data
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + restID);
        const json = await data.json();
        setRestInfo(json.data);
    }

    return restInfo;
}

export default useRestMenu;