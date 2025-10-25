import React, { useState } from "react";
import { Card } from "@material-ui/core";

export default function AddAdjustment() {
  const [formData, setFormData] = useState({
    date: "",
    warehouse: "",
    document: null,
    remarks: "",
    orderList: [
      {
        productType: "",
        productName: "",
        productVariant: "",
        availableQty: "",
        quantity: "",
        adjust: "",
        newAvailableQty: "",
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

  // Handle file change
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      document: e.target.files[0],
    }));
  };

  // Handle table data change
  const handleOrderChange = (index, field, value) => {
    const updatedOrders = [...formData.orderList];
    updatedOrders[index][field] = value;

    // Auto-update new available quantity (optional logic)
    if (field === "adjust" || field === "quantity" || field === "availableQty") {
      const available = parseFloat(updatedOrders[index].availableQty || 0);
      const adjust = parseFloat(updatedOrders[index].adjust || 0);
      updatedOrders[index].newAvailableQty = available + adjust;
    }

    setFormData((prev) => ({
      ...prev,
      orderList: updatedOrders,
    }));
  };

  // Add new order row
  const addOrderRow = () => {
    setFormData((prev) => ({
      ...prev,
      orderList: [
        ...prev.orderList,
        {
          productType: "",
          productName: "",
          productVariant: "",
          availableQty: "",
          quantity: "",
          adjust: "",
          newAvailableQty: "",
        },
      ],
    }));
  };

  // Remove order row
  const removeOrderRow = (index) => {
    const updatedOrders = formData.orderList.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      orderList: updatedOrders,
    }));
  };

  // Submit handler
  const handleSubmit = () => {
    console.log("Adjustment Form Data:", formData);
    alert("Adjustment added successfully!");
  };

  // Cancel handler
  const handleCancel = () => {
    setFormData({
      date: "",
      warehouse: "",
      document: null,
      remarks: "",
      orderList: [
        {
          productType: "",
          productName: "",
          productVariant: "",
          availableQty: "",
          quantity: "",
          adjust: "",
          newAvailableQty: "",
        },
      ],
    });
  };

  return (
    <div className="container-fluid p-0">
      <Card>
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">Add Adjustment</h4>
        </div>

        {/* Form */}
        <div className="p-3">
          <p>The fields marked with <span className="text-danger">*</span> are required.</p>

          {/* Date & Warehouse */}
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Store/Warehouse <span className="text-danger">*</span>
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
              </select>
            </div>

            {/* Attach Document */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Attach Document
              </label>
              <input
                type="file"
                name="document"
                onChange={handleFileChange}
                className="form-control"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </div>
          </div>

          {/* Order List Section */}
          <h5 className="fw-semibold mt-4">Order List</h5>
          <div className="table-responsive mt-3">
            <table className="table table-bordered align-middle text-center">
              <thead style={{ backgroundColor: "#f8f9fa" }}>
                <tr>
                  <th>Product Type</th>
                  <th>Product Name</th>
                  <th>Product Variant</th>
                  <th>Available Qty</th>
                  <th>Quantity</th>
                  <th>Adjust</th>
                  <th>New Available Qty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.orderList.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <select
                        value={item.productType}
                        onChange={(e) =>
                          handleOrderChange(index, "productType", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">-- Choose Type --</option>
                        <option value="Raw Material">Raw Material</option>
                        <option value="Finished Product">Finished Product</option>
                      </select>
                    </td>

                    <td>
                      <select
                        value={item.productName}
                        onChange={(e) =>
                          handleOrderChange(index, "productName", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">-- Choose Product --</option>
                        <option value="Panel">Panel</option>
                        <option value="Light">Light</option>
                      </select>
                    </td>

                    <td>
                      <select
                        value={item.productVariant}
                        onChange={(e) =>
                          handleOrderChange(index, "productVariant", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">-- Choose Variant --</option>
                        <option value="Type A">Type A</option>
                        <option value="Type B">Type B</option>
                      </select>
                    </td>

                    <td>
                      <input
                        type="number"
                        value={item.availableQty}
                        onChange={(e) =>
                          handleOrderChange(index, "availableQty", e.target.value)
                        }
                        className="form-control"
                        placeholder="Available"
                        min="0"
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleOrderChange(index, "quantity", e.target.value)
                        }
                        className="form-control"
                        placeholder="Qty"
                        min="0"
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={item.adjust}
                        onChange={(e) =>
                          handleOrderChange(index, "adjust", e.target.value)
                        }
                        className="form-control"
                        placeholder="Adjust"
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={item.newAvailableQty}
                        readOnly
                        className="form-control bg-light"
                      />
                    </td>

                    <td>
                      {formData.orderList.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeOrderRow(index)}
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
              onClick={addOrderRow}
              className="btn btn-primary mb-3"
            >
              Add Row
            </button>
          </div>

          {/* Remarks */}
          <div className="col-12 mt-4">
            <label className="form-label fw-semibold">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
              placeholder="Enter remarks..."
            />
          </div>
        </div>

        {/* Footer Buttons */}
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
