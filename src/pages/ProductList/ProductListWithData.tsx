import { ProductList } from "./ProductList";
import { useFetchProducts } from "./hooks/useFetchProducts";

const ProductListWithData = () => {
  const [data, isLoading, error] = useFetchProducts();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ProductList products={data || []} />
  );
};

export { ProductListWithData };
