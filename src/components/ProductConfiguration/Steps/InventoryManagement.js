import Checkbox from "@mui/material/Checkbox";

const InventoryManagement = () => {
  return (
    <div className="orderManagement">
      <label htmlFor="orderManagement">Order Management</label>
      <Checkbox defaultChecked />
      <div className="isOrderManagement">
        <label htmlFor="orderManagement">Image</label>
        <Checkbox defaultChecked />
        <label htmlFor="orderManagement">Weight</label>
        <Checkbox defaultChecked />
        <label htmlFor="orderManagement">Temperature</label>
        <Checkbox defaultChecked />
      </div>
    </div>
  );
};

export default InventoryManagement;
