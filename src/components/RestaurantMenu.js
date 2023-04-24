import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CON_URL } from "../constants";
import Shimmer from "./Shimmer";
import { func } from "prop-types";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams(); //reading url id
  //   console.log(id);

  const restaurant = useRestaurant(resId); //data from self made hook

  const data1 = restaurant?.data?.cards[0]?.card?.card?.info;
  const data2 =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;
  // console.log(data2);
  // console.log(data1);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="ml-3 m-2 ">
      <div className="flex">
        <div>
          {" "}
          {/* <h1>restaurant id: {resId}</h1> */}
          <img
            className="w-96 rounded-lg"
            src={IMG_CON_URL + data1?.cloudinaryImageId}
          />
          <h2 className="font-bold text-4xl mt-2">{data1?.name}</h2>
        </div>
        <div className="flex flex-wrap flex-col m-2 p-9 ml-24 text-lg text-gray-500">
          <h3>Area : {data1?.areaName + ", " + data1?.city}</h3>
          <h3>Cuisuines : {data1?.cuisines.join(", ")}</h3>
          <h3>Ratings : {data1?.avgRating} ⭐</h3>
          <h3>Cost for 2 : {data1?.costForTwoMessage}</h3>
        </div>
      </div>
      <div className="p-2 m-2 text-gray-700">
        <h1 className="font-bold text-lg">Menu</h1>
        {/* <ul className=""> */}
        <div className="">
          {data2.map((item) => (
            <li
              className="p-1 m-2 flex justify-between rounded-xl bg-gray-200 shadow-md list-none"
              key={item.card.info.id}
            >
              <span className="p-1 m-2">{item.card.info.name} </span>
              <span>
                <button
                  className="p-2 m-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  //
                  onClick={() => addFoodItem(item?.card?.info)}
                >
                  ADD ITEM
                </button>
                <button
                  className="p-2 m-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  onClick={() => removeFoodItem(item?.card?.info)}
                >
                  REMOVE ITEM
                </button>
              </span>
            </li>
          ))}
        </div>

        {/* </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
