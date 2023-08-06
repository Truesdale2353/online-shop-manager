import ImageGallery from "./components/ImageGallery/ImageGallery";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../ProductEditor/hooks/useFetchProduct";
import { useBasket } from "@/hooks/useBasket";
import { Product as ProductProps } from "../ProductEditor/types";

const Product = () => {
  const { id } = useParams();
  const [data, isLoding, error] = useFetchProduct(id || "");
  const { addItem } = useBasket();

  const handleAddToBasket = (item: ProductProps | null) => {
    if (item) {
      addItem(item);
    }
  };
  const productDetails = {
    name: data?.name,
    color: data?.colors[0],
    description: data?.description,
    price: data?.price,
    onAddToBasket: () => handleAddToBasket(data),
  };
  return isLoding ? (
    <div>Loading</div>
  ) : (
    <div style={{ display: "flex" }}>
      <ImageGallery images={data?.images} />
      <ProductDetails {...productDetails} />
    </div>
  );
};
export { Product };
