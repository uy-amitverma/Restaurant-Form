import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TradeRegistration = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="RegistrationDetails">
      <div style={{ margin: "1rem" }}>
        {/* <label htmlFor='companyName'>Company Name</label> */}
        <TextField
          id="gstNumber"
          label="Gst Number"
          maxRows={4}
          value={value}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div style={{ margin: "1rem" }}>
        {/* <label htmlFor="displayName">Business Display Name</label> */}
        <TextField
          id="companyCertificate"
          label="Company Certificate"
          maxRows={4}
          value={value}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div style={{ margin: "1rem" }}>
        {/* <label htmlFor="address">Head Office Address</label> */}
        <TextField
          id="fssaiNumber"
          label="Fssai Number"
          maxRows={4}
          value={value}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="fssaiCertificate">Fssai Certificate</label>
        <Button variant="contained" component="label">
          Upload
          <input type="file" hidden />
        </Button>
      </div>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="businessPan">Business Pan</label>
        <Button variant="contained" component="label">
          Upload
          <input type="file" hidden />
        </Button>
      </div>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="address">Identity Proof</label>
        <Button variant="contained" component="label">
          Upload
          <input type="file" hidden />
        </Button>
      </div>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="address"> cancelled Cheque</label>
        <Button variant="contained" component="label">
          Upload
          <input type="file" hidden />
        </Button>
      </div>
    </div>
  );
};

export default TradeRegistration;
