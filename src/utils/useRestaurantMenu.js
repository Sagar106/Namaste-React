import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { mockResInfo } from "./menuData";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    const fetchMenu = async () => {
        // const data = fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER")
        // console.log("menu api", data)
        setResInfo(mockResInfo)
    }

    useEffect(() => {
        fetchMenu()
    }, [])

    return resInfo
}

export default useRestaurantMenu