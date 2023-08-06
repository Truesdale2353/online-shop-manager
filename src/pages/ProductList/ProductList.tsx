import { CardItemWithData } from "@/pages/ProductList/CardItem";
import { ProductListContainer } from "./Styled/ProductListContainer";
import { Product } from "@/pages/ProductEditor/types";

interface ProductListProps {
  products?: Product[];
}
const ProductList = ({ products = [] }: ProductListProps) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <CardItemWithData product={product} key={product.id}/>
      ))}
    </ProductListContainer>
  );
};

export { ProductList };
