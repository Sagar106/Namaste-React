import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info

    return (
        <div className="m-2 h-110 bg-amber-50 border-1 border-amber-500 rounded-md w-70 p-3 hover:drop-shadow-lg">
            <div className="relative overflow-hidden rounded-md h-60 w-full mb-2">
                <img
                    className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-110"
                    src={CDN_URL + cloudinaryImageId}
                    alt={name}
                />
            </div>
            <h3 className="font-semibold pb-1">{name}</h3>
            <h4 className="text-[13px] pb-1">{cuisines.join(", ")}</h4>
            <h4 className="text-[13px] pb-1">⭐{avgRating}/5</h4>
            <h4 className="text-[12px]">{costForTwo}</h4>
            <h4 className="text-[12px]">{sla.slaString}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-amber-600 text-amber-50 absolute z-10 p-2 mx-2 rounded-md shadow-lg">Top Rated</label>
                <RestaurantCard  {...props} />
            </div>
        )
    }
}

export default RestaurantCard