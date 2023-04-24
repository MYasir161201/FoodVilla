import { useSelector } from "react-redux";
import CartFoodItems from "./CartFoodItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-3">
      <div className="flex justify-between">
        <h1>Cart Items - {cartItems.length}</h1>
        <button
          className="p-2 m-2 bg-gray-300 rounded-md"
          onClick={() => handleClearCart()}
        >
          Clear Items
        </button>
      </div>
      <div className="flex flex-wrap justify-start">
        {cartItems.map((item) => {
          return <CartFoodItems key={item.id} props={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
