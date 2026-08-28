import "./style.scss";
import { useState } from "react";
import type { ModalProps } from "../../types/product";

export function Modal({ product, onClose }: ModalProps) {
  if (!product) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <dialog
        open
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-body">
          <img src={product.photo} alt={product.productName} />
          <div className="modal-details">
            <h3>{product.productName}</h3>
            <span className="modal-price">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
            <p>
              Many desktop publishing packages and web page editors now many
              desktop publishing
            </p>
            <a href="#">Veja mais detalhes do produto &gt;</a>
            <div className="modal-actions">
              <div className="quantity-control">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span>{String(quantity).padStart(2, "0")}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button className="confirm-buy">COMPRAR</button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
