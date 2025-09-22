import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    const handleTopRatedButton = () => {
        const filteredList = listOfRestaurants.filter((item) => item.info.avgRating > 4)
        setListOfRestaurants(filteredList)
    }

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.119463&lng=77.630658&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleSearch = () => {
        const filteredRestaurantList = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        console.log(filteredRestaurantList)
        setFilteredRestaurants(filteredRestaurantList)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchBox" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button onClick={handleTopRatedButton}>Top rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map(item => (
                    <Link
                        to={`/restaurants/${item.info.id}`}
                        key={item.info.id}
                    >
                        <RestaurantCard
                            resData={item}
                        />
                    </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body