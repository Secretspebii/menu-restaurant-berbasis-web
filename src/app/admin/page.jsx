// src/app/Admin.jsx
"use client";
import React, { useEffect, useState } from "react";
import {
  fetchServices,
  addService,
  updateService,
  deleteService,
} from "../utils/apiClient";
import Image from "next/image";

export default function Admin() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    harga: 0,
    gambar: "",
  });
  const [updateServiceData, setUpdateServiceData] = useState({
    id: "",
    name: "",
    description: "",
    harga: 0,
    gambar: "",
  });

  useEffect(() => {
    async function getServices() {
      const data = await fetchServices();
      setServices(data);
    }
    getServices();
  }, []);

  const handleAddService = async () => {
    const addedService = await addService(newService);
    setServices([...services, addedService]);
    setNewService({ name: "", description: "", harga: 0 });
  };

  const handleUpdateService = async () => {
    const updatedService = await updateService(updateServiceData);
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setUpdateServiceData({ id: "", name: "", description: "", harga: 0 });
  };

  const handleDeleteService = async (id) => {
    await deleteService(id);
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - {service.description} - {service.harga} -{" "}
            {service.gambar && (
              <Image
                src={service.gambar}
                alt={service.name}
                width={500}
                height={500}
              />
            )}
            <button onClick={() => handleDeleteService(service.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>Add Service</h2>
      <input
        type="text"
        placeholder="Name"
        value={newService.name}
        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newService.description}
        onChange={(e) =>
          setNewService({ ...newService, description: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Harga"
        value={newService.harga}
        onChange={(e) =>
          setNewService({ ...newService, harga: e.target.value })
        }
      />
      <button onClick={handleAddService}>Add</button>

      <h2>Update Service</h2>
      <input
        type="number"
        placeholder="ID"
        value={updateServiceData.id}
        onChange={(e) =>
          setUpdateServiceData({ ...updateServiceData, id: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Name"
        value={updateServiceData.name}
        onChange={(e) =>
          setUpdateServiceData({ ...updateServiceData, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Description"
        value={updateServiceData.description}
        onChange={(e) =>
          setUpdateServiceData({
            ...updateServiceData,
            description: e.target.value,
          })
        }
      />
      <button onClick={handleUpdateService}>Update</button>
    </div>
  );
}
