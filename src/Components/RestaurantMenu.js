import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    return (
        <div className="p-4">
            <h1 className="text-3xl py-2">Generic Menu</h1>
            <h1 className="text-2xl">Generic Name</h1>
            <p className="text-xl">{cuisines.join(",")} {costForTwoMessage}</p>
            <h2 className="py-2">Menu</h2>
            <ul>
                {
                    itemCards.map(item => 
                        <li key={item.info.id}>{item.info.name} - {"Rs."}{item.info.price / 100}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu