import "./style.scss";

export function Header() {
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
          <button type="button">🔍</button>
        </div>

        <div className="header-actions">
          <button title="Pedidos">📦</button>
          <button title="Favoritos">❤️</button>
          <button title="Minha Conta">👤</button>
          <button title="Carrinho">🛒</button>
        </div>
      </div>

      <nav className="header-nav">
        <ul>
          <li className="active">TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li>LANÇAMENTOS</li>
          <li>OFERTAS DO DIA</li>
          <li>ASSINATURA</li>
        </ul>
      </nav>
    </header>
  );
}
