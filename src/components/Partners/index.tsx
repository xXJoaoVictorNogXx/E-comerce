import "./style.scss";

export function Partners() {
  return (
    <section className="partners-container">
      <div className="partner-card">
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>CONFIRA</button>
      </div>
      <div className="partner-card">
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>CONFIRA</button>
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <section className="brands-container">
      <h2>Navegue por marcas</h2>
      <div className="brands-list">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="brand-circle">
            <span>econverse</span>
          </div>
        ))}
      </div>
    </section>
  );
}
