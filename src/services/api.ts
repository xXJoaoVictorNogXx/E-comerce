import type { Product } from "../types/product";

const DEFAULT_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
const API_URL = import.meta.env.VITE_PRODUCTS_API_URL || DEFAULT_URL;

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    return data.products || data;
  } catch (error) {
    console.error("Falha ao carregar produtos:", error);
    return [];
  }
}
