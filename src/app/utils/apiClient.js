// src/utils/apiClient.js

const BASE_URL = "/api/services";

// Function to fetch all services
export async function fetchServices() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

// Function to add a new service
export async function addService(service) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(service),
  });
  return response.json();
}

// Function to update a service
export async function updateService(service) {
  const response = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(service),
  });
  return response.json();
}

// Function to delete a service
export async function deleteService(id) {
  const response = await fetch(BASE_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return response.json();
}
