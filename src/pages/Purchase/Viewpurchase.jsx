import React from "react";
import { Card, IconButton, Link } from "@material-ui/core";
import { Edit, Delete, PictureAsPdf } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";

export default function ViewPurchase() {
  // Dummy Purchase Data
  const dummyData = [
    {
      id: 1,
      companyId: "CMP001",
      purchaseCode: "PUR-001",
      date: "2025-10-20",
      document: "invoice1.pdf",
      warehouse: "Main Warehouse",
      supplier: "Supplier A",
      purchaseStatus: "Received",
      orderTax: "GST 18%",
      terms: "Payment within 30 days",
      productType: "Electronics",
      productName: "Solar Inverter",
      productVarient: "Model X200",
      quantity: 10,
      unit: "Pieces",
      price: 12000,
      taxPercent: 18,
      subtotal: 120000,
      total: 141600,
      discount: 1000,
      shippingCost: 500,
    },
    {
      id: 2,
      companyId: "CMP002",
      purchaseCode: "PUR-002",
      date: "2025-10-25",
      document: "invoice2.pdf",
      warehouse: "Branch Warehouse",
      supplier: "Supplier B",
      purchaseStatus: "Pending",
      orderTax: "No Tax",
      terms: "Delivery next week",
      productType: "Electrical",
      productName: "Battery Pack",
      productVarient: "BP-120",
      quantity: 20,
      unit: "Pieces",
      price: 8000,
      taxPercent: 0,
      subtotal: 160000,
      total: 160000,
      discount: 2000,
      shippingCost: 800,
    },
  ];

  // Define columns
  const columns = [
    {
      name: "no",
      label: "Sr No",
      options: {
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    { name: "companyId", label: "Company ID" },
    { name: "purchaseCode", label: "Purchase Code" },
    { name: "date", label: "Date" },
    {
      name: "document",
      label: "Document",
      options: {
        customBodyRender: (value) => (
          <Link            
            style={{
              textDecoration: "none",
              color: "#007bff",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <PictureAsPdf fontSize="small" /> {value}
          </Link>
        ),
      },
    },
    { name: "warehouse", label: "Warehouse" },
    { name: "supplier", label: "Supplier" },
    {
      name: "purchaseStatus",
      label: "Purchase Status",
      options: {
        customBodyRender: (value) => (
          <span
            style={{
              color: value === "Received" ? "green" : "orange",
              fontWeight: 600,
            }}
          >
            {value}
          </span>
        ),
      },
    },
    { name: "orderTax", label: "Order Tax" },
    { name: "terms", label: "Term & Condition" },
    { name: "productType", label: "Product Type" },
    { name: "productName", label: "Product Name" },
    { name: "productVarient", label: "Product Varient" },
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
      name: "taxPercent",
      label: "Tax %",
      options: {
        customBodyRender: (value) => `${value}%`,
      },
    },
    {
      name: "subtotal",
      label: "Subtotal (₹)",
      options: {
        customBodyRender: (value) => `₹${value.toLocaleString()}`,
      },
    },
    {
      name: "total",
      label: "Total (₹)",
      options: {
        customBodyRender: (value) => `₹${value.toLocaleString()}`,
      },
    },
    {
      name: "discount",
      label: "Discount (₹)",
      options: {
        customBodyRender: (value) => `₹${value.toLocaleString()}`,
      },
    },
    {
      name: "shippingCost",
      label: "Shipping Cost (₹)",
      options: {
        customBodyRender: (value) => `₹${value.toLocaleString()}`,
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
              onClick={() => alert(`Edit Purchase ID: ${dummyData[dataIndex].id}`)}
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() =>
                alert(`Delete Purchase ID: ${dummyData[dataIndex].id}`)
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

  return (
    <Card>
      <div>
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3 mb-0">All Purchase List</h4>
        </div>

        {/* Table */}
        <MUIDataTable
          title="Purchase Details"
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
            rowsPerPageOptions: [5, 10, 20],
            elevation: 0,
          }}
        />
      </div>
    </Card>
  );
}
