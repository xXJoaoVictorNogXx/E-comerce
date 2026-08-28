import { useState } from "react";
import "./style.scss";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { label: "Todas Categorias", active: true },
    { label: "Tecnologia & Celulares" },
    { label: "Supermercado" },
    { label: "Bebidas" },
    { label: "Ferramentas" },
    { label: "Saúde & Esportes" },
    { label: "Ofertas do Dia" },
    { label: "Lançamentos" },
  ];

  return (
    <header className="main-header">
      <div className="top-bar">
        <span>
          Compra <strong>100% segura</strong>
        </span>
        <span>
          <strong>Frete grátis</strong> acima de R$ 200
        </span>
        <span>
          <strong>Parcele</strong> suas compras
        </span>
      </div>

      <div className="header-content">
        <div className="logo">
          <h2>econverse</h2>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="O que você está buscando?" />
          <button type="button" aria-label="Buscar">
            🔍
          </button>
        </div>

        <div className="header-actions">
          <button title="Pedidos">📦</button>
          <button title="Favoritos">❤️</button>
          <button title="Minha Conta">👤</button>
          <button title="Carrinho">🛒</button>
        </div>
      </div>

      <nav className="header-nav">
        <ul className="desktop-menu">
          {categories.slice(0, 6).map((cat, index) => (
            <li key={index} className={cat.active ? "active" : ""}>
              {cat.label.toUpperCase()}
            </li>
          ))}
        </ul>

        <div className="mobile-menu-wrapper">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            CATEGORIAS ▾
          </button>

          {isMobileMenuOpen && (
            <ul className="mobile-dropdown">
              {categories.map((cat, index) => (
                <li key={index} className={cat.active ? "active" : ""}>
                  {cat.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
