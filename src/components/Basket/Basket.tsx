import { StyledBasket } from "./Styled/StyledBasket";
import CartItem from "./CartItem";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { useBasket } from "@/hooks/useBasket";
import { useMemo } from "react";
import { calculateTotalValue } from "./utils/BasketUtility";

const CartItemPrice = styled(Typography)`
  position: sticky;
  bottom: 0;
  width: calc(100%-8px);
  background-color: grey;
  padding: 8px;
  font-size: 16px;
  color: white;
  text-align: center;
`;
interface BasketProps {
  onMouseOver?: Function;
  onMouseOut?: Function;
}
const Basket = ({
  onMouseOver = () => {},
  onMouseOut = () => {},
}: BasketProps) => {

  const { basket, removeItem } = useBasket();
  const totalPrice = useMemo(()=> calculateTotalValue(basket),[basket]);
  const onItemClick = (id: number) => {
    window.location.href = `/product/${id}`;
  }
  const renderProductList = () => {
    return basket.map((d) => (
      <CartItem
        key={d.id}
        name={d.name}
        price={d.price}
        image={d.images[0]}
        quantity={d.quantity}
        onDelete={() =>removeItem(d)}
        onItemClick={()=>onItemClick(d.id)}
      />
    ));
  };
  return (
    <StyledBasket
      onMouseOver={() => onMouseOver()}
      onMouseOut={() => onMouseOut()}
    >
      {renderProductList()}
      <CartItemPrice variant="body1">{totalPrice}</CartItemPrice>
    </StyledBasket>
  );
};

export { Basket };
