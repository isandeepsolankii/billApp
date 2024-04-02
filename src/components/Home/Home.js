import React, { useState } from "react";
import Form from "../Form/Form";
import Table from "../Table";

function Home() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData((prevTableData) => [...prevTableData, formData]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <Form onFormSubmit={handleFormSubmit} />
        </div>
        <div className="col-12 col-lg-6 tableBorder">
          <Table tableData={tableData} />
        </div>
      </div>
    </div>
  );
}
export default Home;
