import React from "react";

const ClientForm = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        class="form-control"
        type="text"
        placeholder="Client Name"
        name="clientName"
        value={formData.clientName}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="text"
        placeholder="Client Address"
        name="clientAddress"
        value={formData.clientAddress}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="text"
        placeholder="Client GST No."
        name="clientGST"
        value={formData.clientGST}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="text"
        placeholder="Client Phone Number"
        name="clientPhoneNumber"
        value={formData.clientPhoneNumber}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="text"
        placeholder="Invoice Number"
        name="invoiceNumber"
        value={formData.invoiceNumber}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </div>
  );
};

export default ClientForm;
