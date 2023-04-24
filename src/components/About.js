import aboutLogo from "../assets/img/aboutLogo.jpg";

const About = () => {
  return (
    <div className="m-4 mt-8 p-2 flex justify-evenly">
      <div>
        <h1 className="font-bold text-5xl m-2 p-1">Welcome to</h1>
        <h1 className="font-bold text-5xl m-2 p-1">The world of</h1>
        <h1 className="font-bold text-5xl m-2 p-1 text-white bg-gray-400 rounded-md">
          Tasty and Fresh Food
        </h1>
        <p className="m-2">
          "Better you will feel if you eat a{" "}
          <span className="bg-gray-300 rounded-md">FoodVilla</span> healthy
          meal"
        </p>
      </div>
      <img src={aboutLogo} alt="aboutLogo" className="rounded-lg" />
    </div>
  );
};

export default About;
