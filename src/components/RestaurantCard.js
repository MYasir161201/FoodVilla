import { IMG_CON_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, slaString }) => {
  // console.log({ restaurant });

  return (
    <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-100">
      <img src={IMG_CON_URL + cloudinaryImageId}></img>
      <h2 className="text-xl font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
