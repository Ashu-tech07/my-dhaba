import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className=" font-semibold ">
        {" "}
        {resInfo?.cards[2]?.card?.card?.info?.city}
      </p>

      <p className="font-semibold">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
