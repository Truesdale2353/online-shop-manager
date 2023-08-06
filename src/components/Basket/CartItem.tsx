import React from "react";
import { Delete } from "@mui/icons-material";
import {
  CartItemCard,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  RemoveButton,
  CartItemListProperty,
} from "./Styled/StyledCartItem";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  price,
  quantity,
  onDelete = () => {},
}) => {
  return (
    <CartItemCard>
      <CartItemImage image={image} title={name} />
      <CartItemInfo>
        <CartItemName variant="h6">{name}</CartItemName>
        <CartItemListProperty variant="body1">
          Price: ${price.toFixed(2)}
        </CartItemListProperty>
        <CartItemListProperty variant="body1">
          Quantity: {quantity}
        </CartItemListProperty>
      </CartItemInfo>
      <RemoveButton onClick={onDelete}>
        <Delete />
      </RemoveButton>
    </CartItemCard>
  );
};

export default CartItem;
