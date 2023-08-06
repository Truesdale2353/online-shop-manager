import { Product } from "@/pages/ProductEditor/types";

interface BasketProduct extends Product {
  quantity: number;
}

export type { BasketProduct };
