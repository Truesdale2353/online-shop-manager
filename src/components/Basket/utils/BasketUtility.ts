import { BasketProduct } from "../types";

const calculateTotalValue = (products: BasketProduct[]) => {
  return products.reduce(
    (total, product) => (total += product.price * product.quantity),
    0
  );
};

export { calculateTotalValue };
