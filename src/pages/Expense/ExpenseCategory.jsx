import React, { useState } from "react";
import { Card, Modal, Button } from "@material-ui/core";

export default function AddExpenseCategory() {
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [categories, setCategories] = useState([]);

  // open popup
  const handleOpen = () => {
    setEditIndex(null);
    setCategoryName("");
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // submit (add or edit)
  const handleSubmit = () => {
    if (!categoryName.trim()) {
      alert("Please enter a category name.");
      return;
    }

    if (editIndex !== null) {
      // update existing category
      const updated = [...categories];
      updated[editIndex] = categoryName;
      setCategories(updated);
      alert("Category updated successfully!");
    } else {
      // add new category
      setCategories([...categories, categoryName]);
      alert(`Category "${categoryName}" added successfully!`);
    }

    setCategoryName("");
    handleClose();
  };

  // delete category
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      const updated = categories.filter((_, i) => i !== index);
      setCategories(updated);
    }
  };

  // edit category
  const handleEdit = (index) => {
    setCategoryName(categories[index]);
    setEditIndex(index);
    setOpen(true);
  };

  return (
    <div className="container-fluid p-0">
      <Card>
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">Expense Category</h4>
        </div>

        {/* Main Section */}
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-semibold">Category List</h5>
            <button onClick={handleOpen} className="btn btn-primary">
              Add Expense Category
            </button>
          </div>

          {/* Table */}
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th style={{ width: "10%" }}>Sr No.</th>
                <th>Name</th>
                <th style={{ width: "20%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    No categories added yet.
                  </td>
                </tr>
              ) : (
                categories.map((cat, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{cat}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Popup Modal */}
      <Modal open={open} onClose={handleClose}>
        <div
          className="bg-white rounded shadow p-4"
          style={{
            width: "450px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h5 className="fw-semibold mb-3">
            {editIndex !== null ? "Edit Expense Category" : "Add Expense Category"}
          </h5>
          <p className="mb-3">
            The field labels marked with <span className="text-danger">*</span> are required input fields.
          </p>

          {/* Category Name Input */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="form-control"
              placeholder="Type expense category name"
            />
          </div>

          {/* Footer Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <Button onClick={handleClose} variant="outlined" color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
