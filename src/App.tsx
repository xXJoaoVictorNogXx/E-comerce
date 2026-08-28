import { useEffect, useState } from "react";
import { fetchProducts } from "./services/api";
import type { Product } from "./types/product";
import { ProductCard } from "./components/ProductCard";
import { Modal } from "./components/Modal";
import "./styles/global.scss";
import { Header } from "./components/Header";

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="main-container">
      <Header />
      <h1>Produtos Relacionados</h1>

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <section className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onOpenModal={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </section>
      )}

      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}

export default App;
