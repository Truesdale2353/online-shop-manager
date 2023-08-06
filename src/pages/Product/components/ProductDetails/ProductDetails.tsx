import React from 'react';
import styled from 'styled-components';
import { Typography, Button, TextField } from '@mui/material';

const ProductDetailsContainer = styled.div`
  margin-bottom: 10px;
`;

const ProductName = styled(Typography)`
  margin-bottom:  10px;
  font-weight: bold;
`;

const ProductDescription = styled(Typography)`
  margin-bottom:  10px;
  color: #888;
`;

const ProductColor = styled(Typography)`
  margin-bottom:  10px;
`;

const AddToBasketButton = styled(Button)`
  padding: 10px;
`;

const isEdit = false;
interface ProductDetailsProps {
  name?: string;
  price?: number;
  description?: string;
  color?: string;
  onAddToBasket: () => void;
}


const ProductDetails = ({ name, price, description, color, onAddToBasket }:ProductDetailsProps) => {
  return (
    <ProductDetailsContainer>
      <ProductName variant="h1">{name}</ProductName>
      <Typography variant="h2">${price}</Typography>
      <ProductDescription variant="body1">{description}</ProductDescription>
      <ProductColor variant="body1">Color: {color}</ProductColor>
      <AddToBasketButton variant="contained" color="primary" onClick={onAddToBasket}>
        Add to Basket
      </AddToBasketButton>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
