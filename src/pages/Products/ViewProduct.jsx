import React from "react";
import { Card, IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";

export default function ViewProduct() {
 
  const dummyData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=100",
      name: "Laptop Dell Inspiron",
      code: "DELL-001",
      brand: "Dell",
      category: "Electronics",
      type: "Laptop",
      quantity: 50,
      unit: "Pieces",
      price: 60000,
      cost: 55000,
      status: "Active",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100",
      name: "Mobile Samsung Galaxy",
      code: "SAM-002",
      brand: "Samsung",
      category: "Electronics",
      type: "Mobile",
      quantity: 100,
      unit: "Pieces",
      price: 25000,
      cost: 22000,
      status: "Active",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=100",
      name: "Office Chair Executive",
      code: "GOD-003",
      brand: "Godrej",
      category: "Furniture",
      type: "Chair",
      quantity: 75,
      unit: "Pieces",
      price: 4500,
      cost: 4000,
      status: "Inactive",
    },
  ];

  // Define columns
  const columns = [
    {
      name: "no",
      label: "No",
      options: {
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    {
      name: "image",
      label: "Image",
      options: {
        customBodyRender: (value) => (
          <img
            src={value}
            alt="Product"
            style={{
              width: "55px",
              height: "55px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        ),
        filter: false,
        sort: false,
      },
    },
    { name: "name", label: "Name" },
    { name: "code", label: "Code" },
    { name: "brand", label: "Brand" },
    { name: "category", label: "Category" },
    { name: "type", label: "Type" },
    { name: "quantity", label: "Quantity" },
    { name: "unit", label: "Unit" },
    {
      name: "price",
      label: "Price (₹)",
      options: {
        customBodyRender: (value) => `₹${value.toLocaleString()}`,
      },
    },
    {
      name: "cost",
      label: "Cost (₹)",
      options: {
        customBodyRender: (value) => `₹${value.toLocaleString()}`,
      },
    },
    {
      name: "status",
      label: "Product Status",
      options: {
        customBodyRender: (value) => (
          <span
            style={{
              color: value === "Active" ? "green" : "red",
              fontWeight: 600,
            }}
          >
            {value}
          </span>
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
              onClick={() => alert(`Edit ID: ${dummyData[dataIndex].id}`)}
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() => alert(`Delete ID: ${dummyData[dataIndex].id}`)}
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

  return (
    <Card container>
      <div>
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3 mb-0">ALL Product List</h4>
        </div>

        <MUIDataTable
          title="Product Details"
          data={dummyData}
          columns={columns}
          options={{
            filterType: "checkbox",
            selectableRows: "none",
            responsive: "standard",
            print: true,
            download: true,
            viewColumns: true,
            filter: true,
            search: true,
            rowsPerPage: 5,
          }}
        />
      </div>
    </Card>
  );
}
