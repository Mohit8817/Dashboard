import React from "react";
import { Card, IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";

export default function ViewDispatch() {
  // Dummy dispatch data
  const dispatchData = [
    {
      id: 1,
      date: "2025-10-25",
      dispatchNo: "DISP-001",
      project: "Solar Project A",
      state: "Maharashtra",
      district: "Pune",
      address: "Plot No. 45, Hinjewadi Phase 1",
      warehouse: "Main Warehouse",
      truckNo: "MH12AB1234",
      challanNo: "CH-2025-001",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=100",
      productType: "Panel",
      productName: "Solar Panel 250W",
      productVariant: "SP-250",
      purpose: "Installation",
      quantity: 20,
      unit: "Pieces",
      remark: "Delivered successfully",
      status: "Delivered",
    },
    {
      id: 2,
      date: "2025-10-20",
      dispatchNo: "DISP-002",
      project: "Street Light Project",
      state: "Gujarat",
      district: "Surat",
      address: "Sector 5, Industrial Area",
      warehouse: "Warehouse 2",
      truckNo: "GJ05XY4321",
      challanNo: "CH-2025-002",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=100",
      productType: "Light",
      productName: "LED Street Light 60W",
      productVariant: "LED-60",
      purpose: "Replacement",
      quantity: 50,
      unit: "Pieces",
      remark: "Pending inspection",
      status: "Pending",
    },
  ];

  // Table Columns
  const columns = [
    {
      name: "sno",
      label: "S No.",
      options: {
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    { name: "date", label: "Date" },
    { name: "dispatchNo", label: "Dispatch No." },
    { name: "project", label: "Project" },
    { name: "state", label: "State" },
    { name: "district", label: "District" },
    { name: "address", label: "Address" },
    { name: "warehouse", label: "Warehouse" },
    { name: "truckNo", label: "Truck No." },
    { name: "challanNo", label: "Challan No." },
    {
      name: "image",
      label: "Image",
      options: {
        customBodyRender: (value) => (
          <img
            src={value}
            alt="Dispatch"
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
    { name: "productType", label: "Product Type" },
    { name: "productName", label: "Product Name" },
    { name: "productVariant", label: "Product Varient" },
    { name: "purpose", label: "Purpose" },
    { name: "quantity", label: "Quantity" },
    { name: "unit", label: "Unit" },
    { name: "remark", label: "Remark" },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value) => (
          <span
            style={{
              color:
                value === "Delivered"
                  ? "green"
                  : value === "Pending"
                  ? "orange"
                  : "red",
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
              onClick={() =>
                alert(`Edit Dispatch ID: ${dispatchData[dataIndex].id}`)
              }
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() =>
                alert(`Delete Dispatch ID: ${dispatchData[dataIndex].id}`)
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

  // Table Options
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
      {/* Header */}
      <div style={{ backgroundColor: "#eeeeeeff" }}>
        <h4 className="text-dark fs-5 p-3 mb-0">All Dispatch Records</h4>
      </div>

      {/* Table */}
      <MUIDataTable
        title="Dispatch Details"
        data={dispatchData}
        columns={columns}
        options={options}
      />
    </Card>
  );
}
