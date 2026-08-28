export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export interface ModalProps {
  product: Product | null;
  onClose: () => void;
}
