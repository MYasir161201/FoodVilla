import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  //   const searchInput = "KFC";

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.547702830277366&lng=77.30132784694432&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> You're Offline.Please check your internet connection.</h1>;
  }

  if (!allRestaurants) return;
  //no data found
  if (!filteredRestaurants) return <h1>No restaurants found</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="ml-2">
      <div className="flex justify-center p-5 my-5 bg-pink-100">
        <input
          type="text"
          className="focus:bg-green-200 m-2 p-2 border-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md"
          onClick={() => {
            //need to filter data(restaurants)
            const data = filterData(searchText, allRestaurants);
            //update the state--restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {filteredRestaurants.length !== 0 ? (
        <div className="flex flex-wrap justify-normal ml-20">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>No restaurants found!!</h1>
        </div>
      )}
    </div>
  );
};

export default Body;
