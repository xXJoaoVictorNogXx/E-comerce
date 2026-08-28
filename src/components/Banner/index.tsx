import "./style.scss";
import { categories } from "../../assets/img/constants/img";

export function Banner() {
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
            <div className="icon-box">
              {cat.img ? <img src={cat.img} alt={cat.name} /> : null}
            </div>
            <span>{cat.name}</span>
          </div>
        ))}
      </section>
    </>
  );
}
