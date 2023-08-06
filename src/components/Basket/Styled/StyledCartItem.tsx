import styled from "styled-components";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton/IconButton";
const CartItemCard = styled(Card)`
  display: flex;
  margin-bottom: 16px;
`;

const CartItemImage = styled(CardMedia)`
  width: 150px;
  height: 150px;
`;

const CartItemInfo = styled(CardContent)`
  flex-grow: 1;
`;

const CartItemName = styled(Typography)`
  font-weight: bold;
`;

const CartItemListProperty = styled(Typography)`
  margin-top: 8px;
`;

const RemoveButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  top: 5px;
  right: 5px;
`;

export {
  CartItemCard,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  CartItemListProperty,
  RemoveButton,
};
