import React from "react";

const ClientTable = ({ clientDetails }) => {
  return (
    <thead>
      <tr>
        <th colSpan="4">
          <p>
            Client name: <span>{clientDetails.clientName}</span>{" "}
          </p>
          <p>
            Client Address: <span>{clientDetails.clientAddress}</span>
          </p>
          <p>
            Client GST: <span>{clientDetails.clientGST}</span>
          </p>
          <p>
            Client Phone Number: <span>{clientDetails.clientPhoneNumber}</span>
          </p>
        </th>
        <th colSpan="2">
          <p>
            Date: <br />
            <span>{clientDetails.date}</span>
          </p>
          <p>
            Invoice Number: <br />
            <span>{clientDetails.invoiceNumber}</span>
          </p>
        </th>
      </tr>

      <tr>
        <th>S.No</th>
        <th>Description</th>
        <th>Size</th>
        <th>Quantity</th>
        <th>Rate</th>
        <th>Amount</th>
      </tr>
    </thead>
  );
};

export default ClientTable;
