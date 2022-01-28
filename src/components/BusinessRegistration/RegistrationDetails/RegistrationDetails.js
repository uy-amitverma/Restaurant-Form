import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./RegistrationDetails.module.css";

const initialState = {
  companyName: "",
  displayName: "",
  address: "",
  pincode: 0,
  state: "",
  city: "",
  managerName: "",
  managerNumber: "",
};
const RegistrationDetails = () => {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const [ fieldName, fieldValue] = [e.target.id, e.target.value];
    setState({
      ...state,
      [fieldName] : fieldValue});
  };

  return (
    <div className={styles.registrationDetails}>
      <div className={styles.field}>
        {/* <label htmlFor='companyName'>Company Name</label> */}
        <TextField
          id="companyName"
          label="Company Name"
          maxRows={4}
          value={state.companyName}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div className={styles.field}>
        {/* <label htmlFor="displayName">Business Display Name</label> */}
        <TextField
          id="displayName"
          label="Business Display Name"
          maxRows={4}
          value={state.displayName}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div className={styles.field}>
        {/* <label htmlFor="address">Head Office Address</label> */}
        <TextField
          id="address"
          label="Head Office Address"
          rows={4}
          value={state.address}
          onChange={handleChange}
          fullWidth
          multiline
        />
      </div>
      <div className={styles.field}>
        {/* <label htmlFor="address">Head Office Address</label> */}
        <TextField
          id="pincode"
          label="Pincode"
          // maxRows={4}
          type="number"
          value={state.pincode}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div className={styles.field}>
        {/* <label htmlFor="address">Head Office Address</label> */}
        <TextField
          id="city"
          label="City"
          maxRows={4}
          value={state.city}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div className={styles.field}>
        <TextField
          id="state"
          label="State"
          rows={4}
          value={state.state}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div className={styles.field}>
        {/* <label htmlFor="address">Head Office Address</label> */}
        <TextField
          id="managerName"
          label="Manager Name"
          maxRows={4}
          value={state.managerName}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div className={styles.field}>
        {/* <label htmlFor="address">Head Office Address</label> */}
        <TextField
          id="managerNumber"
          label="Manager Contact Number"
          maxRows={4}
          value={state.managerNumber}
          onChange={handleChange}
          fullWidth
          type="number"
        />
      </div>
    </div>
  );
};

export default RegistrationDetails;
