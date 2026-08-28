import "./style.scss";
import type { ProductCardProps } from "../../types/product";

export function ProductCard({ product, onOpenModal }: ProductCardProps) {
  return (
    <article className="product-card">
      <img src={product.photo} alt={product.productName} />
      <div className="product-info">
        <p className="description">{product.descriptionShort}</p>
        <span className="price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </span>
        <span className="installments">ou 2x de R$ 49,95 sem juros</span>
        <p className="shipping">Frete grátis</p>
      </div>
      <button className="buy-button" onClick={() => onOpenModal(product)}>
        COMPRAR
      </button>
    </article>
  );
}
