// this is a self made hook used to fetch data for a particular restaurant according to the url id
//we'll use it in restaurantMenu component.
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get data
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&submitAction=ENTER`
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.517929&lng=88.38341199999999&restaurantId=${resId}`
    );
    const json = await data.json();

    //return restaurant data
    setRestaurant(json);
  }

  return restaurant;
};

export default useRestaurant;
