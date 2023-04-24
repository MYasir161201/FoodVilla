import { IMG_CON_URL } from "../constants";
const CartFoodItems = ({ props }) => {
  console.log(props);

  return (
    <div className="card w-[200px] p-2 m-2 shadow-lg rounded-3xl bg-pink-100">
      <img className="rounded-md" src={IMG_CON_URL + props.imageId}></img>
      <h1 className="font-bold">{props.name}</h1>
      <p className="text-gray-700">{props.description}</p>
      <h2 className="text-gray-900 font-bold">Rs. {props.price / 100}</h2>
    </div>
  );
};

export default CartFoodItems;
