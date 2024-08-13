import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCards = (props) => {
  const { resData } = props;
 
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    resData;
  return (
    <div data-testid="resCard" className="p-4 m-4 w-[260px] rounded-lg hover:bg-gray-300 bg-gray-100">
      <img
        alt={name}
        className="w-[230px] h-[200px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-card-content">
        <h3 className="py-1 font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>Rating: {avgRating}</h4>
        <span> Delivery : {sla.slaString} </span>
      </div>
    </div>
  );
};

export const withTopLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <div className="absolute m-2 p-2 bg-slate-900 font-bold text-white rounded ">
          {" "}
          Top{" "}
        </div>
        <RestaurantCards {...props} />
      </div>
    );
  };
};
export default RestaurantCards;
