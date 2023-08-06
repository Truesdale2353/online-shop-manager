import useFetch from "@/hooks/useFetch";
import { Product } from "@/pages/ProductEditor/types";

const useFetchProducts = (): [Product[] | null, Boolean, Boolean] => {
  const [data, isLoading, error] = useFetch<Product[]>("products");
  return [data, isLoading, error];
};

export { useFetchProducts };
