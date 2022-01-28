import { VerticalLinearStepper } from "../VerticalStepper";
import {
  CookingManagement,
  DeliveryAndPayment,
  InventoryManagement,
  OrderManagement,
  QualityManagement,
} from "./Steps";

const steps = {
  "Order Management": OrderManagement,
  "Quality Management": QualityManagement,
  "Inventory Management": InventoryManagement,
  "Cooking Management": CookingManagement,
  "Delivery & Payment": DeliveryAndPayment,
};

const ProductStepper = () => {
  return (
    <div>
      <VerticalLinearStepper steps={steps} />
    </div>
  );
};

export default ProductStepper;
