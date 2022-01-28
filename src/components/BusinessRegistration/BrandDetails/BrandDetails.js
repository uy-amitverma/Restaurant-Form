import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import styles from './BrandDetails.module.css';

const BrandDetails = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="brandDetails">
      <div className={styles.field}>
        {/* <label htmlFor='companyName'>Company Name</label> */}
        <TextField
          id="brandName"
          label="Brand Name"
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="trademarkCertificate">Trademark Certificate</label>
        <Button variant="contained" component="label">
          Upload
          <input type="file" hidden />
        </Button>
      </div>
      <div className={styles.field}>
        {/* <label htmlFor='companyName'>Company Name</label> */}
        <TextField
          id="brandTagline"
          label="Brand Tagline"
          rows={4}
          value={value}
          onChange={handleChange}
          multiline
          fullwidth
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="brandLogo">Brand Logo</label>
        <Button variant="contained" component="label">
          Upload
          <input type="file" hidden />
        </Button>
      </div>
    </div>
  );
};

export default BrandDetails;
