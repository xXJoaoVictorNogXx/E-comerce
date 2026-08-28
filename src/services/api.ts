import type { Product } from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
  );
  const data = await response.json();
  return data.products || [];
};
