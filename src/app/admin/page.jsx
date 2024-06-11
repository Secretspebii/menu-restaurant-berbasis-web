// src/app/Admin.jsx
"use client";
import React, { useEffect, useState } from "react";
import { fetchServices } from "../utils/apiClient";
import Image from "next/image";

export default function Admin() {
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
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - {service.description} - {service.harga}
            {service.gambar && (
              <Image
                src={service.gambar}
                alt={service.name}
                width={500}
                height={500}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
