import React from "react";
import { CardItem } from "./CardItem";
import { Product } from "@/pages/ProductEditor/types";

interface CardItemWithDataProps {
  product: Product
}

const CardItemWithData = ({product}:CardItemWithDataProps) => {
  const [imageIndex, setImage] = React.useState(0);
  const onItemClick = () => {
    window.location.href = `product/${product.id}`;
  }

  return (
    <CardItem
      title={product.name}
      description={product.description}
      colors={product.colors}
      setImage={setImage}
      image={product.images[imageIndex]}
      onClick={onItemClick}
    ></CardItem>
  );
};

export { CardItemWithData };
