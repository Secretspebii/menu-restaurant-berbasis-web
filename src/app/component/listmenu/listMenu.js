"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchServices } from "@/app/utils/apiClient";
const ListMenu = () => {
  const [services, setServices] = useState([
    {
      name: "",
      description: "",
      harga: 0,
      gambar: "",
    },
  ]);

  useEffect(() => {
    async function getServices() {
      const data = await fetchServices();
      setServices(data);
    }
    getServices();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold text-[#FED03D] mb-10">
          x X Daftar Menu Restaurant Kampung X x
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="max-w-sm bg-[#2F2F2F] rounded-sm shadow-xl shadow-white-500/50"
            >
              <a href="#">
                <Image
                  className="rounded-sm"
                  src={service.gambar}
                  alt={service.name}
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {service.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {service.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {service.harga}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListMenu;
