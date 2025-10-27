import React, { useState } from "react";
import {
  Card,
  IconButton,
  TextField,
  MenuItem,
  Button,
  Grid,
} from "@material-ui/core";
import { Edit, Delete, Search } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";

export default function ProductDispatch() {
  // Dummy dispatch data
  const allDispatches = [
    {
      id: 1,
      date: "2025-10-25",
      dispatchNo: "DISP-001",
      project: "Solar Project A",
      state: "Maharashtra",
      district: "Pune",
      warehouse: "Main Warehouse",
      truckNo: "MH12AB1234",
      challanNo: "CH-2025-001",
      productType: "Panel",
      productName: "Solar Panel 250W",
      purpose: "Installation",
      quantity: 20,
      unit: "Pieces",
    },
    {
      id: 2,
      date: "2025-10-20",
      dispatchNo: "DISP-002",
      project: "Street Light Project",
      state: "Gujarat",
      district: "Surat",
      warehouse: "Warehouse 2",
      truckNo: "GJ05XY4321",
      challanNo: "CH-2025-002",
      productType: "Light",
      productName: "LED Street Light 60W",
      purpose: "Replacement",
      quantity: 50,
      unit: "Pieces",
    },
  ];

  // Filter state
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    state: "",
    project: "",
    product: "",
    search: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Filter logic
  const filteredData = allDispatches.filter((item) => {
    const { from, to, state, project, product, search } = filters;

    const itemDate = new Date(item.date);
    const fromDate = from ? new Date(from) : null;
    const toDate = to ? new Date(to) : null;

    return (
      (!fromDate || itemDate >= fromDate) &&
      (!toDate || itemDate <= toDate) &&
      (!state || item.state === state) &&
      (!project || item.project === project) &&
      (!product ||
        item.productName.toLowerCase().includes(product.toLowerCase())) &&
      (!search ||
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase()))
    );
  });

  // Columns
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
    { name: "warehouse", label: "Warehouse" },
    { name: "truckNo", label: "Truck No." },
    { name: "challanNo", label: "Challan No." },
    { name: "productType", label: "Product Type" },
    { name: "productName", label: "Product Name" },
    { name: "purpose", label: "Purpose" },
    { name: "quantity", label: "Quantity" },
    { name: "unit", label: "Unit" },
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
                alert(`Edit Dispatch ID: ${filteredData[dataIndex].id}`)
              }
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() =>
                alert(`Delete Dispatch ID: ${filteredData[dataIndex].id}`)
              }
            >
              <Delete fontSize="small" />
            </IconButton>
          </div>
        ),
      },
    },
  ];

  const options = {
    filter: false,
    selectableRows: "none",
    responsive: "standard",
    search: false,
  };

  return (
    <div>
      <Card className="mb-2">
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">Dispatch Product List Filters</h4>
        </div>

        <Grid container spacing={2} className="p-3">
          {/* From Date */}
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="From"
              type="date"
              name="from"
              value={filters.from}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>

          {/* To Date */}
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="To"
              type="date"
              name="to"
              value={filters.to}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>

          {/* State */}
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              select
              label="State"
              name="state"
              value={filters.state}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">-- Select State --</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <MenuItem value="Gujarat">Gujarat</MenuItem>
            </TextField>
          </Grid>

          {/* Project */}
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              select
              label="Project"
              name="project"
              value={filters.project}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">-- Select Project --</MenuItem>
              <MenuItem value="Solar Project A">Solar Project A</MenuItem>
              <MenuItem value="Street Light Project">
                Street Light Project
              </MenuItem>
            </TextField>
          </Grid>

          {/* Product */}
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="Product"
              name="product"
              value={filters.product}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          {/* Search */}
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="Search"
              name="search"
              value={filters.search}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} sm={12} md={12} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Search />}
              onClick={() => console.log("Filters:", filters)}
            >
              Apply Filter
            </Button>
          </Grid>
        </Grid>
      </Card>

      {/* Filtered Table */}
      <Card>
        <MUIDataTable
          title="Dispatch Product List"
          data={filteredData}
          columns={columns}
          options={options}
        />
      </Card>
    </div>
  );
}
