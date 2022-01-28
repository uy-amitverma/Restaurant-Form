import Checkbox from '@mui/material/Checkbox';

const CookingManagement = () => {
  return (
    <div className="cookingManagement">
      <label htmlFor="orderManagement">Cooking Management</label>
      <Checkbox defaultChecked />
      <div className="isOrderManagement">
        <label htmlFor="orderManagement">Enable Item Scan</label>
        <Checkbox defaultChecked />
        <label htmlFor="orderManagement">Enable Cooking Station Camera</label>
        <Checkbox defaultChecked />
      </div>
    </div>
  );
};

export default CookingManagement;
