import { BusinessStepper } from "../components/BusinessRegistration";
import { ProductStepper } from "../components/ProductConfiguration";
import styles from "./form.module.css";

const Form = () => {
  return (
    <div className={styles["restaurant-form-container"]}>
      <div className={styles["businessRegistration-form"]}>
        <h3>Business Registration</h3>
        <BusinessStepper />
      </div>
      <div className="productConfiguration-form">
        <h3>Product Configuration</h3>
        <ProductStepper />
      </div>
    </div>
  );
};

export default Form;
