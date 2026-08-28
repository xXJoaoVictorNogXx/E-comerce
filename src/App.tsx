import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./services/api";
import type { Product } from "./types/product";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import { Partners, Brands } from "./components/Partners";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="app-container">
      <Header />
      <Banner />

      <main className="main-content">
        <section className="showcase">
          <h2 className="section-title">Produtos relacionados</h2>

          {isLoading && (
            <p className="status-message">Carregando produtos...</p>
          )}
          {isError && (
            <p className="status-message error">
              Erro ao carregar os produtos.
            </p>
          )}

          {!isLoading && !isError && (
            <div className="product-grid">
              {products.map((prod, idx) => (
                <ProductCard
                  key={idx}
                  product={prod}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </section>

        <Partners />

        <section className="showcase">
          <h2 className="section-title">Produtos relacionados</h2>
          {!isLoading && !isError && (
            <div className="product-grid">
              {products.slice(0, 4).map((prod, idx) => (
                <ProductCard
                  key={idx}
                  product={prod}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </section>

        <Partners />
        <Brands />

        <section className="showcase">
          <h2 className="section-title">Produtos relacionados</h2>
          {!isLoading && !isError && (
            <div className="product-grid">
              {products.slice(0, 4).map((prod, idx) => (
                <ProductCard
                  key={idx}
                  product={prod}
                  onOpenModal={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
