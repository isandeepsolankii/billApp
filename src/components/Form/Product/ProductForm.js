import React from "react";

const ProductForm = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        class="form-control"
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="text"
        placeholder="Size"
        name="size"
        value={formData.size}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="number"
        placeholder="Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
      <input
        class="form-control"
        type="number"
        step="0.01" // Allow decimal values with precision of two decimal places
        placeholder="Rate"
        name="rate"
        value={formData.rate}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </div>
  );
};

export default ProductForm;
