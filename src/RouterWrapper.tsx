import { Routes, Route } from "react-router-dom";
import { ProductListWithData, Product } from "@/pages";
import { Test } from './Test';
import DeliveryRequests from "./pages/DeliveryRequests/DeliveryRequests";
// to be exported
import { sampleDeliveryRequests } from "./services/data/sampleDeliveryRequests";
import { ProductEditor } from "./pages/ProductEditor";

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path={'/product/:id'} element={<Product />} />
      <Route path={'/product-list'} element={<ProductListWithData />} />
      <Route path={'/product-form'} element={<ProductEditor />} />
      <Route path={'/delivery-requests'} element={<DeliveryRequests deliveryRequests={sampleDeliveryRequests} />} />
      <Route path={'/test'} element={<Test />} />
    </Routes>
  );
};

export { RouterWrapper };
