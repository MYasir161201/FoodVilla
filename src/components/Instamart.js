import { useState } from "react";
import instamart from "../assets/img/instamart.png";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="m-2 p-2 border border-black ">
      <h2 className="font-bold">{title}</h2>
      {isVisible ? (
        <button
          className="underline cursor-pointer"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="underline cursor-pointer"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div className="bg-pink-100 ">
      <h1 className="font-bold text-3xl p-2 m-2  ">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Everything you need gets delivered in minutes with Swiggy Instamart. Order now. Order fruits, veggies, milk, munchies & more online from FoodVilla Instamart. Safe packing. Fresh Products. Great deals. Instant delivery. Door Step Delivery."
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "We have a trusted team of more than 100 people working tirelessly and endlessly to deliver the products. The FoodVilla instamart community is growing day by day."
        }
      />
      <Section
        title={"Careers"}
        description={"We'll be coming up with our careers page soon."}
      />
    </div>
  );
};

export default Instamart;
