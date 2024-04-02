import React from "react";

const ProductTable = ({ tableData }) => {
  return (
    <tbody>
      {tableData.map((data, index) => (
        <tr key={index}>
          <td>{data.sno}</td>
          <td>
            {data.description.length > 50 ? (
              <>
                {data.description.substring(0, 50)}
                <br />
                {data.description.substring(50)}
              </>
            ) : (
              data.description
            )}
          </td>
          <td>{data.size}</td>
          <td>{data.quantity}</td>
          <td>{data.rate}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductTable;
