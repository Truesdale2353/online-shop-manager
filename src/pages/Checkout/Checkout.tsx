import CartItem from "@/components/Basket/CartItem";
import { useBasket } from "@/hooks/useBasket";
const Checkout = () => {
  const { basket, removeItem } = useBasket();
  const onItemClick = (id: number) => {
    window.location.href = `/product/${id}`;
  }
  const renderProductList = (removeItem: Function) => {
    return basket.map((d) => (
      <CartItem
        key={d.id}
        name={d.name}
        price={d.price}
        image={d.images[0]}
        quantity={d.quantity}
        onDelete={() => removeItem(d)}
        onItemClick={()=>onItemClick(d.id)}
      />
    ));
  };
  return <div>{renderProductList(removeItem)}</div>;
};
export { Checkout };
