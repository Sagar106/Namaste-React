import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const API_BASE_URL = "https://namastedev.com/api/v1";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/listRestaurantMenu/${resId}`
      );
      const data = await response.json();
      setMenuData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!menuData?.cards) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData.cards[2].card.card.info;

  const categories =
    menuData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) => c.card?.card?.itemCards
    );

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl pb-4">{name}</h1>

      <p className="pb-2 font-medium">
        {cuisines.join(", ")} • {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
