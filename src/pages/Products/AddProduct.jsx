// import React from 'react'

// const AddProduct = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default AddProduct

import { Card } from "@material-ui/core";
import React, { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    maker: "",
    warehouse: "",
    capacity: "",
    quantity: "",
    units: "",
    productImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Product added successfully!");
  };

  const handleCancel = () => {
    setFormData({
      category: "",
      name: "",
      maker: "",
      warehouse: "",
      capacity: "",
      quantity: "",
      units: "",
      productImage: null,
    });
  };

  return (
    <div className="container-fluid p-0">
      <Card className="">
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">Add Product</h4>
        </div>

        {/* Form */}
        <div className="p-3">
          <p>The field labels marked with * are mandatory input fields.</p>

          {/* Product Detail Section */}
          <h5 className="fw-semibold mb-3 mt-4">Product Detail</h5>
          <div className="row g-3">
            {/* Category */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Category <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter category"
              />
            </div>

            {/* Name */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter product name"
              />
            </div>

            {/* Maker */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Maker <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="maker"
                value={formData.maker}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter maker name"
              />
            </div>

            {/* Warehouse */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Warehouse <span className="text-danger">*</span>
              </label>
              <select
                name="warehouse"
                value={formData.warehouse}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Select Warehouse --</option>
                <option value="Jammu Warehouse">Jammu Warehouse</option>
                <option value="Delhi Warehouse">Delhi Warehouse</option>
                <option value="Mumbai Warehouse">Mumbai Warehouse</option>
                <option value="Bangalore Warehouse">Bangalore Warehouse</option>
              </select>
            </div>

            {/* Capacity */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Capacity <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter capacity"
              />
            </div>

            {/* Quantity */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Quantity <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter quantity"
                min="0"
              />
            </div>

            {/* Units */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Units <span className="text-danger">*</span>
              </label>
              <select
                name="units"
                value={formData.units}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Select Unit --</option>
                <option value="Pieces">Pieces</option>
                <option value="Kg">Kg</option>
                <option value="Liters">Liters</option>
                <option value="Boxes">Boxes</option>
                <option value="Meters">Meters</option>
              </select>
            </div>

            {/* Upload Image */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Upload Image <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                name="productImage"
                onChange={handleFileChange}
                className="form-control"
                accept="image/*"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <div className="d-flex justify-content-between p-3">
            <button onClick={handleSubmit} className="btn btn-success px-4">
              Submit Form
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-outline-primary px-4"
            >
              Cancel
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
