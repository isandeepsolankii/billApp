import React, { useState } from "react";
import Client from "./Client/ClientForm";
import Product from "./Product/ProductForm";

const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientAddress: "",
    clientGST: "",
    clientPhoneNumber: "",
    date: "",
    invoiceNumber: "",
    sno: "",
    description: "",
    size: "",
    quantity: "",
    rate: "",
    amount: "",
  });
  const [serialNumber, setSerialNumber] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the formData state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Calculate amount when quantity or rate changes
    if (name === "quantity" || name === "rate") {
      const quantity = parseFloat(
        name === "quantity" ? value : formData.quantity
      );
      const rate = parseFloat(name === "rate" ? value : formData.rate);
      const amount =
        isNaN(quantity) || isNaN(rate) ? "" : (quantity * rate).toFixed(2);
      setFormData((prevData) => ({
        ...prevData,
        amount: amount,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      sno: serialNumber, // Assign serial number
    };
    onFormSubmit(updatedFormData);
    setFormData();
    // Only set serial number to 1 if a new data is added
    setSerialNumber((prevSerialNumber) => prevSerialNumber + 2 - 1);
  };

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Client Data
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Client formData={formData} handleChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Product Details
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Product formData={formData} handleChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
