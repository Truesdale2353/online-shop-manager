import useFetch from "@/hooks/useFetch"
import { Category } from "@/components/types/CategoryTypes";

const useFetchCategories = (): [Array<Category> | null, Boolean, Boolean] => {
const [data, isLoading, error] = useFetch<Array<Category>>(`categories`);
return [data, isLoading, error]
}

export { useFetchCategories }