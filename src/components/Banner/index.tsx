import "./style.scss";

export function Banner() {
  const categories = [
    { name: "Tecnologia", active: true },
    { name: "Supermercado" },
    { name: "Bebidas" },
    { name: "Ferramentas" },
    { name: "Saúde" },
    { name: "Esportes e Fitness" },
    { name: "Moda" },
  ];

  return (
    <>
      <section className="hero-banner">
        <div className="banner-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            <span>50% Off</span> nos produtos
          </p>
          <button>Ver produto</button>
        </div>
      </section>

      <section className="category-grid">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`category-card ${cat.active ? "active" : ""}`}
          >
            <div className="icon-box">💻</div>
            <span>{cat.name}</span>
          </div>
        ))}
      </section>
    </>
  );
}
