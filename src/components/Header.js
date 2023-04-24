import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
  <Link to="/">
    <img className="h-28 p-3" alt="logo" src={Logo} />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setiSLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-1 bg-gray-200 rounded-md mx-2 hover:bg-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1 bg-gray-200 rounded-md mx-2 hover:bg-gray-300">
            <Link to="/about">About</Link>
          </li>
          <li className="px-1 bg-gray-200 rounded-md mx-2 hover:bg-gray-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-1 bg-gray-200 rounded-md mx-2 hover:bg-gray-300">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-1 bg-gray-200 rounded-md mx-2 hover:bg-gray-300">
            <Link to="/cart">🛒 - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="mr-3 py-5" onClick={() => setiSLoggedIn(false)}>
          👤 Logout
        </button>
      ) : (
        <button className="mr-3 py-5" onClick={() => setiSLoggedIn(true)}>
          <Link to="/login">👤 Login</Link>
        </button>
      )}
    </div>
  );
};

export default Header;
