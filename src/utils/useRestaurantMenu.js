import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { mockResInfo } from "./menuData";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    const fetchMenu = async () => {
        setResInfo(mockResInfo)
    }

    useEffect(() => {
        fetchMenu()
    }, [])

    return resInfo
}

export default useRestaurantMenu