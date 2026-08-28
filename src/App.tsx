import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./services/api";
import type { Product } from "./types/product";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import { Partners, Brands } from "./components/Partners";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

const CATEGORIES = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<string>("CELULAR");

  const carouselRef = useRef<HTMLDivElement>(null);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Banner />

      <main className="main-content">
        <section className="showcase">
          <h2 className="section-title">Produtos relacionados</h2>

          {/* BARRA VISUAL DE CATEGORIAS */}
          <ul className="category-tabs">
            {CATEGORIES.map((category) => (
              <li
                key={category}
                className={`tab-item ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          {isLoading && (
            <p className="status-message">Carregando produtos...</p>
          )}
          {isError && (
            <p className="status-message error">
              Erro ao carregar os produtos.
            </p>
          )}

          {!isLoading && !isError && (
            <div className="carousel-wrapper">
              <button
                className="carousel-btn prev"
                onClick={() => handleScroll("left")}
                aria-label="Anterior"
              >
                &#10094;
              </button>

              <div className="product-carousel" ref={carouselRef}>
                {products.map((prod, idx) => (
                  <ProductCard
                    key={idx}
                    product={prod}
                    onOpenModal={setSelectedProduct}
                  />
                ))}
              </div>

              <button
                className="carousel-btn next"
                onClick={() => handleScroll("right")}
                aria-label="Próximo"
              >
                &#10095;
              </button>
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
