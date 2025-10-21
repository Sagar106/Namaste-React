import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [isTopRated, setIsTopRated] = useState(false)
    const onlineStatus = useOnlineStatus()
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    const handleTopRatedButton = () => {
        const newIsTopRated = !isTopRated;
        setIsTopRated(newIsTopRated);

        if (newIsTopRated) {
            const filteredList = listOfRestaurants.filter(
                (item) => item.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
        } else {
            setFilteredRestaurants(listOfRestaurants);
        }
    };


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.951764396503366&lng=77.72220332175493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();

        console.log(json)

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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

    if (onlineStatus===false) return (
        <div className="online-status">
            <p>You are offline, please connect to an internet!</p>
        </div>
    )

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex justify-between items-center">
                <div className="p-3">
                    <input type="text" className="border-2 border-amber-500 rounded-md mx-2" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="px-3 py-1 mx-2 bg-amber-400 rounded-md cursor-pointer hover:bg-amber-50 hover:text-amber-500" onClick={handleSearch}>Search</button>
                </div>
                <div className="">
                    <button className="px-5 py-1 mx-5 border-1 text-amber-500 bg-amber-50 rounded-md cursor-pointer hover:bg-amber-400 hover:text-amber-50" onClick={handleTopRatedButton}>Top rated restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap p-5 justify-center">
                {
                    filteredRestaurants.map(item => (
                    <Link
                        to={`/restaurants/${item.info.id}`}
                        key={item.info.id}
                    >
                            {
                                (item.info.avgRating > 4.5) ? 
                                    <RestaurantCardPromoted resData={item} /> : 
                                    <RestaurantCard resData={item} />
                            }
                    </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body