import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(null)

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => c.card?.card?.itemCards
    )

    console.log("categories", categories)

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl pb-4">Generic Name</h1>
            <p className="text pb-2 font-medium">{cuisines.join(", ")} {costForTwoMessage}</p>
            {
                categories.map((category, index) => (
                        <RestaurantCategory 
                            key={category.card.card.title} 
                            data={category.card.card} 
                            showItems={index === showIndex ? true : false}
                            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                        />
                ))
            }
        </div>
    )
}

export default RestaurantMenu