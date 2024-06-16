// src/pages/makanan/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import { fetchMenuByCategory } from "../utils/apiClient";
import Image from "next/image";
const MakananPage = () => {
  const [makanan, setMakanan] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMenuByCategory("makanan");
      setMakanan(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-end w-full bg-[#1A1A1A]">
      <div className="w-10/12">
        <div className="flex flex-col items-center justify-center p-10">
          <h1 className="text-3xl font-bold text-[#FED03D] mb-10">
            x X Daftar Menu Makanan X x
          </h1>
          <div className="grid grid-cols-4 gap-8">
            {makanan.map((menu) => (
              <div
                key={menu.id}
                className="max-w-sm bg-[#2F2F2F] rounded-sm shadow-xl shadow-white-500/50"
              >
                <a href="#">
                  <Image
                    className="rounded-sm"
                    src={menu.gambar}
                    alt={menu.name}
                    width={500}
                    height={500}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      {menu.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {menu.description}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {menu.harga}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakananPage;
