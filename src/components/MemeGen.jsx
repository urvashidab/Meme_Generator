import React from "react";
import img from "../assets/img.svg";
import { FaRegImage } from "react-icons/fa6";

const MemeGen = () => {
  return (
    <div className="min-h-[80vh] my-10 mx-auto max-w-5xl bg-cyan-50 rounded-lg shadow-md">
      <nav className="flex justify-between items-center bg-gradient-to-r from-cyan-400 to-cyan-800 px-10 py-4 shadow-md rounded-t-lg">
        <img src={img} alt="logo" className="w-20" />
        <h2 className="text-4xl font-bold text-white">Meme Generator</h2>
        <p className="text-lg text-gray-100">React & Tailwind</p>
      </nav>

      <div className="flex flex-col items-center mt-4 py-10 rounded-b-lg">
        <div className="flex items-center gap-6 mb-6">
          <input
            type="text"
            placeholder="Top text"
            className="w-72 px-4 py-3 text-lg rounded border outline-none focus:ring-1 focus:ring-cyan-600"
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="w-72 px-4 py-3 text-lg rounded border outline-none focus:ring-1 focus:ring-cyan-600"
          />
        </div>

        {/* button full width under both inputs */}
        <button className="w-[600px] py-3 px-5 text-xl rounded border flex justify-center items-center gap-3 hover:bg-cyan-200 transition">
          Get a new meme image <FaRegImage />
        </button>
      </div>
    </div>
  );
};

export default MemeGen;
