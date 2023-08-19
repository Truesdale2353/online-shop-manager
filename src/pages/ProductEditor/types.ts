import { Category } from "@/components/types/CategoryTypes";

interface Image {
  file: File;
}

interface ProductFormProps {
  name: string;
  price: number;
  description: string;
  colors: Array<string>;
  categories: Array<string>;
}

interface RelatedProduct {
  url: string;
  thumnailImage: string;
}

interface ProductModel {
  id: string;
  modelName: string;
}
interface Product {
  id: number;
  name: string;
  model: ProductModel;
  price: number;
  description: string;
  colors: string[];
  categoreis: Array<Category>;
  images: string[];
  relatedProducts: RelatedProduct[];
}

type FetchResult<T> = [data: T | null, isLoading: boolean, error: boolean];

export type { Image, ProductFormProps, Product, FetchResult };
