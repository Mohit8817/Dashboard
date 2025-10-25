import React from "react";
import { Card, IconButton, Link } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";

export default function ViewAdjustment() {
  // Dummy data
  const dummyData = [
    {
      id: 1,
      date: "2025-10-21",
      warehouse: "Warehouse 1",
      document: "doc_001.pdf",
      productType: "Finished Product",
      productName: "Solar Panel 250W",
      productVariant: "Type A",
      adjust: "+",
      adjustQty: 10,
      remarks: "Added stock after inspection",
    },
    {
      id: 2,
      date: "2025-10-23",
      warehouse: "Warehouse 2",
      document: "doc_002.jpg",
      productType: "Raw Material",
      productName: "Copper Wire Roll",
      productVariant: "Type B",
      adjust: "-",
      adjustQty: 5,
      remarks: "Damaged in transit",
    },
    {
      id: 3,
      date: "2025-10-24",
      warehouse: "Warehouse 1",
      document: "doc_003.pdf",
      productType: "Finished Product",
      productName: "Street Light",
      productVariant: "Model X",
      adjust: "+",
      adjustQty: 8,
      remarks: "Extra units received",
    },
  ];

  // Define columns
  const columns = [
    {
      name: "no",
      label: "S No.",
      options: {
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    { name: "date", label: "Date" },
    { name: "warehouse", label: "Warehouse" },
    {
      name: "document",
      label: "Document",
      options: {
        customBodyRender: (value) => (
          <Link            
            onClick={(e) => {
              e.preventDefault();
              alert(`Open document: ${value}`);
            }}
            style={{
              textDecoration: "none",
              color: "#007bff",
              cursor: "pointer",
            }}
          >
            {value}
          </Link>
        ),
      },
    },
    { name: "productType", label: "Product Type" },
    { name: "productName", label: "Product Name" },
    { name: "productVariant", label: "Product Variant" },
    {
      name: "adjust",
      label: "Adjust",
      options: {
        customBodyRender: (value) => (
          <span
            style={{
              color: value === "+" ? "green" : "red",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            {value}
          </span>
        ),
      },
    },
    {
      name: "adjustQty",
      label: "Adjust Quantity",
      options: {
        customBodyRender: (value) => (
          <span style={{ fontWeight: 600 }}>{value}</span>
        ),
      },
    },
    {
      name: "remarks",
      label: "Remarks",
      options: {
        customBodyRender: (value) => (
          <span style={{ color: "#555", fontStyle: "italic" }}>{value}</span>
        ),
      },
    },
    {
      name: "actions",
      label: "Action",
      options: {
        customBodyRenderLite: (dataIndex) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <IconButton
              color="primary"
              size="small"
              onClick={() =>
                alert(`Edit Adjustment ID: ${dummyData[dataIndex].id}`)
              }
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() =>
                alert(`Delete Adjustment ID: ${dummyData[dataIndex].id}`)
              }
            >
              <Delete fontSize="small" />
            </IconButton>
          </div>
        ),
        filter: false,
        sort: false,
      },
    },
  ];

  // MUIDataTable options
  const options = {
    filterType: "checkbox",
    selectableRows: "none",
    responsive: "standard",
    print: true,
    download: true,
    viewColumns: true,
    filter: true,
    search: true,
    rowsPerPage: 5,
  };

  return (
    <Card>
      <div style={{ backgroundColor: "#eeeeeeff" }}>
        <h4 className="text-dark fs-5 p-3 mb-0">All Adjustment List</h4>
      </div>

      <MUIDataTable
        title="Adjustment Details"
        data={dummyData}
        columns={columns}
        options={options}
      />
    </Card>
  );
}
