import React from "react";
import Card from "../assets/card.png";

function Navbar() {
  return (
    <div className="flex justify-between p-3 items-center border border-slate-400 drop-shadow-xl mt-3">
      <div className="flex items-center">
        <img src={Card} className="h-10 w-10 ml-5" alt="Card Logo" />
        <h1 className="font-sans text-4xl font-bold ml-3">Card Site</h1>
      </div>
      <div className="flex flex-row space-x-4 mr-5">
        <p className="hover:font-bold">Home</p>
        <p className="hover:font-bold">About</p>
        <p className="hover:font-bold">Contact Us</p>
      </div>
    </div>
  );
}

export default Navbar;
