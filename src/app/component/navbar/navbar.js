"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <nav className="navbar w-1/6 h-screen bg-[#FFA901] flex items-center justify-center flex-col text-black fixed">
      <a href="/" className="text-3xl font-bold mb-5">
        Daftar Menu
      </a>
      <li className="list-none">
        <Link href={`/makanan`}>
          <button
            className={`text-xl font-bold py-1 px-5 rounded-md w-48 mb-3 ${
              activeCategory === "makanan" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleClick("makanan")}
          >
            Makanan
          </button>
        </Link>
      </li>
      <li className="list-none">
        <Link href={`/minuman`}>
          <button
            className={`text-xl font-bold py-1 px-5 rounded-md w-48 ${
              activeCategory === "minuman" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleClick("minuman")}
          >
            Minuman
          </button>
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
