// src/utils/apiClient.js

const BASE_URL = "/api/menues";

// Function to fetch all services
export async function fetchMenu() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

// Function to fetch services by category
export async function fetchMenuByCategory(category) {
  const response = await fetch(`${BASE_URL}?category=${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
