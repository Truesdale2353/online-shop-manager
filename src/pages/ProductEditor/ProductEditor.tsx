import React from "react";
import { Typography } from "@material-ui/core";

import ProductForm from "./components/ProductForm/ProductForm";
import { ProductFormProps } from "./types";
import { useRecoilValue } from "recoil";
import { imageFormAtom } from "./components/ImageForm/ImageFormAtom";

const ProductEditor: React.FC = () => {
  const images = useRecoilValue(imageFormAtom);
  const onSubmit = (data: ProductFormProps) => {
    console.log(data);
    console.log(images);
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product Editor
      </Typography>
      <ProductForm onSubmit={onSubmit} />
    </div>
  );
};

export default ProductEditor;
