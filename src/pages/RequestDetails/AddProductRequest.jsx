import React, { useState } from "react";
import { Card } from "@material-ui/core";

export default function AddProductRequest() {
  const [formData, setFormData] = useState({
    requiredDate: "",
    warehouse: "",
    remarks: "",
    productList: [
      {
        productName: "",
        quantity: "",
        unit: "",
      },
    ],
  });

  // Handle normal input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle table data change
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...formData.productList];
    updatedProducts[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      productList: updatedProducts,
    }));
  };

  // Add new product row
  const addProductRow = () => {
    setFormData((prev) => ({
      ...prev,
      productList: [...prev.productList, { productName: "", quantity: "", unit: "" }],
    }));
  };

  // Remove product row
  const removeProductRow = (index) => {
    const updatedProducts = formData.productList.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      productList: updatedProducts,
    }));
  };

  // Submit handler
  const handleSubmit = () => {
    console.log("Product Request Data:", formData);
    alert("Product Request Submitted Successfully!");
  };

  // Cancel handler
  const handleCancel = () => {
    setFormData({
      requiredDate: "",
      warehouse: "",
      remarks: "",
      productList: [{ productName: "", quantity: "", unit: "" }],
    });
  };

  return (
    <div className="container-fluid p-0">
      <Card>
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3 mb-0">Add Product Request</h4>
        </div>

        {/* Form Body */}
        <div className="p-3">
          <p>
            The fields marked with <span className="text-danger">*</span> are required.
          </p>

          {/* Form Inputs */}
          <div className="row g-3">
            {/* Required Date */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Product Required Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="requiredDate"
                value={formData.requiredDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Warehouse */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Warehouse Name <span className="text-danger">*</span>
              </label>
              <select
                name="warehouse"
                value={formData.warehouse}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="Warehouse 1">Warehouse 1</option>
                <option value="Warehouse 2">Warehouse 2</option>
                <option value="Warehouse 3">Warehouse 3</option>
              </select>
            </div>

            {/* Remarks */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Remarks</label>
              <input
                type="text"
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter remarks..."
              />
            </div>
          </div>

          {/* Product List Section */}
          <h5 className="fw-semibold mt-4">Product List</h5>
          <div className="table-responsive mt-3">
            <table className="table table-bordered align-middle text-center">
              <thead style={{ backgroundColor: "#f8f9fa" }}>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.productList.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <select
                        value={item.productName}
                        onChange={(e) =>
                          handleProductChange(index, "productName", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">-- Select Product --</option>
                        <option value="Solar Panel 250W">Solar Panel 250W</option>
                        <option value="LED Street Light 60W">LED Street Light 60W</option>
                        <option value="Battery 12V">Battery 12V</option>
                      </select>
                    </td>

                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleProductChange(index, "quantity", e.target.value)
                        }
                        className="form-control"
                        placeholder="Enter Qty"
                        min="0"
                      />
                    </td>

                    <td>
                      <select
                        value={item.unit}
                        onChange={(e) =>
                          handleProductChange(index, "unit", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">-- Select Unit --</option>
                        <option value="Pieces">Pieces</option>
                        <option value="Boxes">Boxes</option>
                        <option value="Kg">Kg</option>
                      </select>
                    </td>

                    <td>
                      {formData.productList.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeProductRow(index)}
                          className="btn btn-danger btn-sm"
                        >
                          Remove
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              type="button"
              onClick={addProductRow}
              className="btn btn-primary mb-3"
            >
              + Add Row
            </button>
          </div>
        </div>

        {/* Footer Buttons */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <div className="d-flex justify-content-between p-3">
            <button onClick={handleSubmit} className="btn btn-success px-4">
              Submit Request
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
