import type { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const API_URL = import.meta.env.VITE_PRODUCTS_API_URL;

  if (!API_URL) {
    console.error(" ERRO: A variável VITE_PRODUCTS_API_URL está UNDEFINED!");
    return [];
  }

  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    const productsArray = data.products || data;

    return productsArray;
  } catch (err) {
    console.error(" ERRO NO  / PARSE:", err);
    return [];
  }
}
