import React from "react";
import { EthiopianDatePicker } from "ethiopian-date-picker-and-converter";
import "ethiopian-date-picker-and-converter/dist/cjs/style.css";
import { EthiopianDateConverter } from "ethiopian-date-picker-and-converter";

const App = () => {
  const handleDateChange = (date) => {
    console.log("Selected Ethiopian date:", date);
  };

  // Convert with default 'full' format
  const fullDate = EthiopianDateConverter("2024-01-15"); // Returns: 'ሰኞ፣ ጥር 7 ቀን 2016 ዓ.ም.'

  // Convert with 'date-only' format
  const dateOnly = EthiopianDateConverter("2024-01-15", "date-only");

  // Convert with 'object' format
  const dateObject = EthiopianDateConverter("2024-01-15", "object");

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Ethiopian Date Picker Example</h1>
      <div style={{ marginTop: "20px" }}>
        <EthiopianDatePicker
          id="date-picker"
          placeholder="የቀን መምረጫ / Select Date"
          onDateChange={handleDateChange}
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>Conversion Results</h2>
        <p>Full Date: {fullDate}</p>
        <p>Date Only: {dateOnly}</p>
        <p>Date Object: {JSON.stringify(dateObject)}</p>
      </div>
    </div>
  );
};

export default App;
