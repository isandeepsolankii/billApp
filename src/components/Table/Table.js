import React, { useRef } from "react";
import "./Table.css";
import FileSaver from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ClientTable from "./Client/ClientTable";
import ProductTable from "./Product/ProductTable";

const Table = ({ tableData }) => {
  const printContentRef = useRef(null);
  console.log("The saved data is : ", tableData);

  const handlePrint = () => {
    const printContent = printContentRef.current.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  const handleSaveTableAsDoc = () => {
    const printContent = printContentRef.current.innerHTML;

    const styledTableForDoc = ` <html>
<head>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  ${printContent}
</body>
</html>`;
    const blob = new Blob([styledTableForDoc], { type: "text/html" });
    FileSaver.saveAs(blob, "table.doc");
  };

  const handleSaveTableAsPdf = () => {
    const printContent = printContentRef.current;
    html2canvas(printContent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("table.pdf");
    });
  };

  const clientDetails = tableData.length > 0 ? tableData[0] : {};
  const productData = tableData.slice(1); // Exclude the first element which is client data

  return (
    <div
      className="print-table-container"
      style={{ maxWidth: "210mm", margin: "0 auto" }}
    >
      <h1 style={{ textAlign: "center" }}>Table Data</h1>
      <div ref={printContentRef} id="print-content">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <ClientTable clientDetails={clientDetails} />
          <ProductTable tableData={productData} />
        </table>
      </div>

      <button
        onClick={handlePrint}
        style={{ display: "block", margin: "20px auto" }}
      >
        Print Table
      </button>

      <button onClick={handleSaveTableAsDoc}>Save as Doc</button>
      <button onClick={handleSaveTableAsPdf}>Save as PDF</button>
    </div>
  );
};

export default Table;
