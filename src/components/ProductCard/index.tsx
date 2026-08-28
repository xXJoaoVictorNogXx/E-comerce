import "./style.scss";
import type { ProductCardProps } from "../../types/product";

export function ProductCard({ product, onOpenModal }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <article className="product-card">
      <img src={product.photo} alt={product.productName} />
      <h3 className="product-title">{product.productName}</h3>
      <p className="description">{product.descriptionShort}</p>

      <div className="price-container">
        <span className="old-price">R$ 30,90</span>
        <span className="current-price">{formattedPrice}</span>
        <span className="installments">ou 2x de R$ 49,95 sem juros</span>
        <span className="free-shipping">Frete grátis</span>
      </div>

      <button className="buy-button" onClick={() => onOpenModal(product)}>
        COMPRAR
      </button>
    </article>
  );
}
