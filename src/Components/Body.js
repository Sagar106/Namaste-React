import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])

    const handleTopRatedButton = () => {
        const filteredList = listOfRestaurants.filter((item) => item.info.avgRating > 4)
        setListOfRestaurants(filteredList)
    }

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.119463&lng=77.630658&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();

        console.log("json", json)

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (listOfRestaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="search">
                <button onClick={handleTopRatedButton}>Top rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(item => (
                        <RestaurantCard
                            resData={item}
                            key={item.info.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Body