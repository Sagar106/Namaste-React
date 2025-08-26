import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    const handleTopRatedButton = () => {
        const filteredList = listOfRestaurants.filter((item) => item.info.avgRating > 4)
        setListOfRestaurants(filteredList)
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