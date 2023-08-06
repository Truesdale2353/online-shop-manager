import { Product } from "@/pages/ProductEditor/types";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { BasketProduct } from "./types";

const { persistAtom } = recoilPersist();

const localStorageEffect = <BasketProduct>(key: string) => ({ setSelf, onSet }: any) => {
  const storedValue = localStorage.getItem(key);

  if (storedValue != null) {
    setSelf(JSON.parse(storedValue) as BasketProduct);
  }

  onSet((newValue: BasketProduct) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  });
};

const basketAtomKey = "BASKET_ATOM";
const basketAtom = atom<BasketProduct[]>({
  key: basketAtomKey,
  default: [],
  effects_UNSTABLE: [persistAtom],
  effects: [
    localStorageEffect('basket'),
  ]
});

export { basketAtomKey, basketAtom };
