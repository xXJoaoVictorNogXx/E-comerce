import type { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const API_URL = import.meta.env.VITE_PRODUCTS_API_URL;

  console.log("1. URL LIDA DO ENV:", API_URL);

  if (!API_URL) {
    console.error(" ERRO: A variável VITE_PRODUCTS_API_URL está UNDEFINED!");
    return [];
  }

  try {
    const response = await fetch(API_URL);
    console.log("2. STATUS DA RESPOSTA HTTP:", response.status);

    const data = await response.json();
    console.log("3. DADOS RECEBIDOS DA API:", data);

    const productsArray = data.products || data;
    console.log("4. ARRAY DE PRODUTOS EXTRAÍDO:", productsArray);

    return productsArray;
  } catch (err) {
    console.error(" ERRO NO FETCH / PARSE:", err);
    return [];
  }
}
