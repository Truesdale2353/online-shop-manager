import { Product } from "@/pages/ProductEditor/types";
import { useRecoilState } from "recoil";
import { basketAtom } from "@/components/Basket/BasketAtom";
import { BasketProduct } from "@/components/Basket/types";

type BasketReturnProps = {
  addItem: (item: Product) => void;
  removeItem: (product: Product) => void;
  basket: BasketProduct[];
};

const useBasket = (): BasketReturnProps => {
  const [basket, setBasket] = useRecoilState<BasketProduct[]>(basketAtom);

  const addItem = (item: Product) => {
    const existingItemIndex = basket.findIndex(
      (existing) => existing.id === item.id
    );

    if (existingItemIndex !== -1) {
      const newList = [...basket];
      newList[existingItemIndex] = {
        ...newList[existingItemIndex],
        quantity: newList[existingItemIndex].quantity + 1,
      };
      setBasket(newList);
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (product: Product): void => {
    const updatedBasket = basket.reduce(
      (updatedBasket: BasketProduct[], item) => {
        if (item.id === product.id && item.quantity > 1) {
          updatedBasket.push({ ...item, quantity: item.quantity - 1 });
        } else if (item.id !== product.id) {
          updatedBasket.push(item);
        }
        return updatedBasket;
      },
      []
    );
    setBasket(updatedBasket);
  };
  return { addItem, removeItem, basket };
};

export { useBasket };
