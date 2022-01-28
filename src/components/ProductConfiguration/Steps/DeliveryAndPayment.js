import Checkbox from '@mui/material/Checkbox';

const DeliveryAndPayment = () => {
  return (
    <div className="deliveryAndPayment">
      <label htmlFor="orderManagement">Delivery</label>
      <Checkbox defaultChecked />
      <div className="isOrderManagement">
        <label htmlFor="orderManagement">Delivery with Rider Managemen</label>
        <Checkbox defaultChecked />
        <label htmlFor="orderManagement">Delivery by Dunzo</label>
        <Checkbox defaultChecked />
      </div>
      <label htmlFor="orderManagement">Payment</label>
      <Checkbox defaultChecked />
      <div className="isOrderManagement">
        <label htmlFor="orderManagement">Cash on delivery</label>
        <Checkbox defaultChecked />
        <label htmlFor="orderManagement">Digital Payments</label>
        <Checkbox defaultChecked />
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
