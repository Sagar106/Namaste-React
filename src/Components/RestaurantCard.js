import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info

    return (
        <div className="m-2 h-105 bg-amber-50 border-1 border-amber-500 rounded-md w-70 p-3 hover:drop-shadow-lg">
            <div className="relative overflow-hidden rounded-md h-60 w-full mb-2">
                <img
                className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-110"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
                />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard