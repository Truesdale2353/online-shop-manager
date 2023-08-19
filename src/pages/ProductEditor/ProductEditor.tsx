import React from "react";
import { Typography } from "@material-ui/core";

import ProductForm from "./components/ProductForm/ProductForm";
import { ProductFormProps } from "./types";
import { useRecoilValue } from "recoil";
import { imageFormAtom } from "./components/ImageForm/ImageFormAtom";
import { useFetchCategories } from "./hooks/useFetchCategories";

const ProductEditor: React.FC = () => {
  const images = useRecoilValue(imageFormAtom);
  const [categories, isLoading] = useFetchCategories();
  const onSubmit = (data: ProductFormProps) => {
    console.log(data);
    console.log(images);
  };
  return (
    isLoading ? <div> Loading </div> :
    <div>
      <Typography variant="h4" gutterBottom>
        Product Editor
      </Typography>
      <ProductForm onSubmit={onSubmit} categories={categories || []} />
    </div>
  );
};

export default ProductEditor;
