// src/utils/apiClient.js
import { NextResponse } from "next/server";

const BASE_URL = "/api/menues";

// Function to fetch all services
export async function fetchMenu() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  return response.json();
}

// Function to fetch services by category
export async function fetchMenuByCategory(category) {
  const response = await fetch(`${BASE_URL}?category=${category}`);
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  return response.json();
}
