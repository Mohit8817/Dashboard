import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  TextField,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";

export default function ViewExpense() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // open modal
  const handleOpen = () => {
    setEditIndex(null);
    setDate("");
    setCategory("");
    setWarehouse("");
    setAmount("");
    setRemarks("");
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // handle save (add/edit)
  const handleSave = () => {
    if (!date || !category || !warehouse || !amount) {
      alert("Please fill all required fields!");
      return;
    }

    const newExpense = { date, category, warehouse, amount, remarks };

    if (editIndex !== null) {
      const updated = [...expenses];
      updated[editIndex] = newExpense;
      setExpenses(updated);
      alert("Expense updated successfully!");
    } else {
      setExpenses([...expenses, newExpense]);
      alert("Expense added successfully!");
    }

    handleClose();
  };

  const handleEdit = (index) => {
    const item = expenses[index];
    setDate(item.date);
    setCategory(item.category);
    setWarehouse(item.warehouse);
    setAmount(item.amount);
    setRemarks(item.remarks);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      setExpenses(expenses.filter((_, i) => i !== index));
    }
  };

  // Define table columns
  const columns = [
    {
      name: "no",
      label: "Sr No.",
      options: {
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    { name: "date", label: "Date" },
    { name: "category", label: "Category" },
    { name: "warehouse", label: "Warehouse" },
    { name: "amount", label: "Amount (₹)" },
    { name: "remarks", label: "Remarks" },
    {
      name: "actions",
      label: "Action",
      options: {
        customBodyRenderLite: (dataIndex) => (
          <div style={{ display: "flex", gap: "6px" }}>
            <IconButton
              color="primary"
              size="small"
              onClick={() => handleEdit(dataIndex)}
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() => handleDelete(dataIndex)}
            >
              <Delete fontSize="small" />
            </IconButton>
          </div>
        ),
      },
    },
  ];

  return (
    <Card>
      {/* Header */}
      <div style={{ backgroundColor: "#eeeeeeff" }}>
        <h4 className="text-dark fs-5 p-3 mb-0">Expense List</h4>
      </div>

      <div className="p-3 d-flex justify-content-end">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          style={{ marginBottom: "12px" }}
        >
          Add Expense
        </Button>
      </div>

      {/* Table */}
      <MUIDataTable
        title={"Expense Details"}
        data={expenses}
        columns={columns}
        options={{
          selectableRows: "none",
          responsive: "standard",
          rowsPerPage: 5,
          search: true,
          filter: true,
          download: false,
          print: false,
        }}
      />

      {/* Popup Form */}
      <Modal open={open} onClose={handleClose}>
        <div
          className="bg-white rounded shadow p-4"
          style={{
            width: "500px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h5 className="fw-semibold mb-3">
            {editIndex !== null ? "Edit Expense" : "Add Expense"}
          </h5>
          <p className="mb-3">
            The field labels marked with <span className="text-danger">*</span>{" "}
            are required input fields.
          </p>

          <div className="d-flex flex-column gap-3">
            <TextField
              label="Date *"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <TextField
              label="Expense Category *"
              select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
            >
              <MenuItem value="">-- Select Category --</MenuItem>
              <MenuItem value="Office Supplies">Office Supplies</MenuItem>
              <MenuItem value="Travel">Travel</MenuItem>
              <MenuItem value="Maintenance">Maintenance</MenuItem>
            </TextField>

            <TextField
              label="Warehouse *"
              select
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
              fullWidth
            >
              <MenuItem value="">-- Select Warehouse --</MenuItem>
              <MenuItem value="Main Warehouse">Main Warehouse</MenuItem>
              <MenuItem value="Branch Warehouse">Branch Warehouse</MenuItem>
            </TextField>

            <TextField
              label="Amount *"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              fullWidth
            />

            <TextField
              label="Remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Write any remarks"
              multiline
              rows={3}
              fullWidth
            />
          </div>

          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button onClick={handleClose} variant="outlined" color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Modal>
    </Card>
  );
}
