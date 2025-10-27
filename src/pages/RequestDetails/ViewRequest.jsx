import React from "react";
import { Card, IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";

export default function ViewRequest() {
  const requestData = [
    {
      id: 1,
      requiredDate: "2025-10-26",
      warehouse: "Main Warehouse",
      remarks: "Urgent requirement for installation site",
      product: "Solar Panel 250W",
    },
    {
      id: 2,
      requiredDate: "2025-10-28",
      warehouse: "Warehouse 2",
      remarks: "Stock refill for street light project",
      product: "LED Street Light 60W",
    },
    {
      id: 3,
      requiredDate: "2025-11-01",
      warehouse: "Warehouse 3",
      remarks: "Testing batch for new location",
      product: "Battery 12V 100Ah",
    },
  ];

  // Table Columns
  const columns = [
    {
      name: "sno",
      label: "Sr. No.",
      options: {
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    { name: "requiredDate", label: "Required Date" },
    { name: "warehouse", label: "Warehouse" },
    { name: "remarks", label: "Remarks" },
    { name: "product", label: "Product" },
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
                alert(`Edit Request ID: ${requestData[dataIndex].id}`)
              }
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() =>
                alert(`Delete Request ID: ${requestData[dataIndex].id}`)
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
        <h4 className="text-dark fs-5 p-3 mb-0">All Product Requests</h4>
      </div>

      {/* Table */}
      <MUIDataTable
        title="Product Request Details"
        data={requestData}
        columns={columns}
        options={options}
      />
    </Card>
  );
}
