import { VerticalLinearStepper } from "../VerticalStepper";
import BrandDetails from "./BrandDetails/BrandDetails";
import RegistrationDetails from "./RegistrationDetails/RegistrationDetails";
import TradeRegistration from "./TradeRegistration";
const steps = {
  "Restaurant Details": RegistrationDetails,
  "Trade Registration": TradeRegistration,
  "Brand Details": BrandDetails,
};

const BusinessStepper = () => {
  return (
    <div>
      <VerticalLinearStepper steps={steps} />
    </div>
  );
};

export default BusinessStepper;
