"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchMenu } from "@/app/utils/apiClient";

const ListMenu = () => {
  const [menues, setMenues] = useState([]);

  useEffect(() => {
    const getMenues = async () => {
      try {
        const response = await fetchMenu();
        if (response.status === 200 && Array.isArray(response.data)) {
          setMenues(response.data);
        } else {
          console.error("Fetched data is not in the expected format", response);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    getMenues();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-[#FED03D] mb-10">
        x X Daftar Menu Restaurant Kampung X x
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menues.map((menu) => (
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
  );
};

export default ListMenu;
