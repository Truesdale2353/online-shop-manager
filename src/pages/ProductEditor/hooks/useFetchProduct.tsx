import useFetch from "@/hooks/useFetch"
import { Product } from "../types";

const useFetchProduct = (id: string): [Product | null, Boolean, Boolean] => {
const [data, isLoding, error] = useFetch<Product>(`products/${id}`);
return [data, isLoding, error]
}

export { useFetchProduct }