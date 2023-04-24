import React, { useState } from "react";
import contact from "../assets/img/contact.jpg";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="m-4 mt-12 p-2 flex flex-row justify-evenly text-center">
      <img src={contact} alt="contact logo" className="w-2/4 rounded-lg" />

      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="p-2 m-2 font-bold text-4xl">Contact us</h1>
        <input
          className="box-border m-2 p-2 rounded-md border border-black"
          placeholder="Name"
          required
        ></input>
        <input
          className="box-border m-2 p-2 rounded-md border border-black"
          placeholder="Email"
          required
        ></input>
        <textarea
          className="box-border m-2 p-2 rounded-md border border-black"
          placeholder="Type you message here"
          required
        ></textarea>
        <button
          className="m-2 p-2 rounded-md bg-gray-300 hover:bg-gray-400"
          type="submit"
        >
          Submit
        </button>
        {message && (
          <span>
            Thank you for contacting FoodVilla!! We'll get back to you.
          </span>
        )}
      </form>
    </div>
  );
};

export default Contact;
