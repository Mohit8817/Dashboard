import { Card } from "@material-ui/core";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    productType: "",
    productCode: "",
    brand: "",
    category: "",
    productUnit: "",
    productPrice: "",
    alertQuantity: "",
    productTax: "",
    taxMethod: "",
    productDetails: "",
    productImage: null,
    initialStock: "",
    productVariant: "No",
    warehouses: [{ warehouse: "", quantity: "" }],
  });

  const [value, setValue] = useState("");

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
      name: "",
      productType: "",
      productCode: "",
      brand: "",
      category: "",
      productUnit: "",
      productPrice: "",
      alertQuantity: "",
      productTax: "",
      taxMethod: "",
      productDetails: "",
      productImage: null,
      initialStock: "",
      productVariant: "No",
      warehouses: [{ warehouse: "", quantity: "" }],
    });
  };

  const handleWarehouseChange = (index, field, value) => {
    const updatedWarehouses = [...formData.warehouses];
    updatedWarehouses[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      warehouses: updatedWarehouses,
    }));
  };

  const addWarehouse = () => {
    setFormData((prev) => ({
      ...prev,
      warehouses: [...prev.warehouses, { warehouse: "", quantity: "" }],
    }));
  };

  const removeWarehouse = (index) => {
    const updatedWarehouses = formData.warehouses.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      warehouses: updatedWarehouses,
    }));
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
            {/* Product Name */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Product Name <span className="text-danger">*</span>
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

            {/* Product Type */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Product Type <span className="text-danger">*</span>
              </label>
              <select
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="type1">type1</option>
                <option value="type2">type2</option>
              </select>
            </div>

            {/* Product Code */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Product Code <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter product code"
              />
            </div>

            {/* Brand */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Brand</label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="brand1">brand1</option>
                <option value="brand2">brand2</option>
              </select>
            </div>

            {/* Category */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Category <span className="text-danger">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="category1">category1</option>
                <option value="category2">category2</option>
                <option value="PANEL">PANEL</option>
              </select>
            </div>

            {/* Product Unit */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Product Unit <span className="text-danger">*</span>
              </label>
              <select
                name="productUnit"
                value={formData.productUnit}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="number">number</option>
                <option value="meter">meter</option>
                <option value="kilogram">kilogram</option>
              </select>
            </div>

            {/* Product Price */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Product Price <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter product price"
                min="0"
                step="0.01"
              />
            </div>

            {/* Alert Quantity */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Alert Quantity</label>
              <input
                type="number"
                name="alertQuantity"
                value={formData.alertQuantity}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter alert quantity"
                min="0"
              />
            </div>

            {/* Product Tax */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Product Tax</label>
              <select
                name="productTax"
                value={formData.productTax}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="gst@15">gst@15</option>
                <option value="gst@18">gst@18</option>
              </select>
            </div>

            {/* Tax Method */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Tax Method</label>
              <select
                name="taxMethod"
                value={formData.taxMethod}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="Exclusive">Exclusive</option>
                <option value="Inclusive">Inclusive</option>
              </select>
            </div>

            {/* Initial Stock */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Initial Stock</label>
              <select
                name="initialStock"
                value={formData.initialStock}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            {/* Product Variant */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Product Variant</label>
              <select
                name="productVariant"
                value={formData.productVariant}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Product Details</label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder="Write product details here..."
                style={{ height: "240px", backgroundColor: "white" }}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ color: [] }, { background: [] }],
                    ["link", "image", "code-block"],
                    ["clean"],
                  ],
                }}
              />
            </div>

            {/* Upload Image */}
            <div className="col-md-6 mt-4 pt-4">
              <label className="form-label fw-semibold">
                Product Image <span className="text-danger">*</span>
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

          {/* Warehouse Section */}
          <h5 className="fw-semibold mb-3 mt-4">Warehouse</h5>
          {formData.warehouses.map((wh, index) => (
            <div key={index} className="row g-3 mb-3 align-items-end">
              <div className="col-md-5">
                <label className="form-label fw-semibold">Warehouse</label>
                <select
                  value={wh.warehouse}
                  onChange={(e) =>
                    handleWarehouseChange(index, "warehouse", e.target.value)
                  }
                  className="form-select"
                >
                  <option value="">Select...</option>
                  <option value="warehouse 1">warehouse 1</option>
                  <option value="warehouse 2">warehouse 2</option>
                </select>
              </div>
              <div className="col-md-5">
                <label className="form-label fw-semibold">Quantity</label>
                <input
                  type="number"
                  value={wh.quantity}
                  onChange={(e) =>
                    handleWarehouseChange(index, "quantity", e.target.value)
                  }
                  className="form-control"
                  placeholder="Enter quantity"
                  min="0"
                />
              </div>
              <div className="col-md-2">
                {formData.warehouses.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeWarehouse(index)}
                    className="btn btn-danger w-100"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addWarehouse}
            className="btn btn-primary mb-3"
          >
            Add Warehouse
          </button>
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
