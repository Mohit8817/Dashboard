import React, { useState } from "react";
import { Card } from "@material-ui/core";

export default function AddDispatch() {
  const [formData, setFormData] = useState({
    date: "",
    project: "",
    state: "",
    district: "",
    address: "",
    warehouse: "",
    truckNo: "",
    challanNo: "",
    dispatchedStatus: "",
    document: null,
    remarks: "",
    orderList: [
      {
        productType: "",
        productName: "",
        productVariant: "",
        purpose: "",
        availableQty: "",
        quantity: "",
        price: "",
        tax: "",
        subTotal: "",
      },
    ],
  });

  // Handle basic input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      document: e.target.files[0],
    }));
  };

  // Handle order table field changes
  const handleOrderChange = (index, field, value) => {
    const updatedOrders = [...formData.orderList];
    updatedOrders[index][field] = value;

    // Auto calculate subtotal if price/tax/quantity change
    const qty = parseFloat(updatedOrders[index].quantity || 0);
    const price = parseFloat(updatedOrders[index].price || 0);
    const tax = parseFloat(updatedOrders[index].tax || 0);
    updatedOrders[index].subTotal = (qty * (price + tax)).toFixed(2);

    setFormData((prev) => ({
      ...prev,
      orderList: updatedOrders,
    }));
  };

  // Add a new order row
  const addOrderRow = () => {
    setFormData((prev) => ({
      ...prev,
      orderList: [
        ...prev.orderList,
        {
          productType: "",
          productName: "",
          productVariant: "",
          purpose: "",
          availableQty: "",
          quantity: "",
          price: "",
          tax: "",
          subTotal: "",
        },
      ],
    }));
  };

  // Remove an order row
  const removeOrderRow = (index) => {
    const updatedOrders = formData.orderList.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      orderList: updatedOrders,
    }));
  };

  // Submit
  const handleSubmit = () => {
    console.log("Dispatch Form Data:", formData);
    alert("Dispatch added successfully!");
  };

  // Cancel / Reset
  const handleCancel = () => {
    setFormData({
      date: "",
      project: "",
      state: "",
      district: "",
      address: "",
      warehouse: "",
      truckNo: "",
      challanNo: "",
      dispatchedStatus: "",
      document: null,
      remarks: "",
      orderList: [
        {
          productType: "",
          productName: "",
          productVariant: "",
          purpose: "",
          availableQty: "",
          quantity: "",
          price: "",
          tax: "",
          subTotal: "",
        },
      ],
    });
  };

  // Calculate totals
  const totalQuantity = formData.orderList.reduce(
    (sum, item) => sum + parseFloat(item.quantity || 0),
    0
  );
  const totalPrice = formData.orderList.reduce(
    (sum, item) => sum + parseFloat(item.price || 0),
    0
  );
  const totalTax = formData.orderList.reduce(
    (sum, item) => sum + parseFloat(item.tax || 0),
    0
  );
  const totalSubTotal = formData.orderList.reduce(
    (sum, item) => sum + parseFloat(item.subTotal || 0),
    0
  );

  return (
    <div className="container-fluid p-0">
      <Card>
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">Add Dispatch</h4>
        </div>

        <div className="p-3">
          <p>
            The fields marked with <span className="text-danger">*</span> are required.
          </p>

          {/* Basic Fields */}
          <div className="row g-3">
            <div className="col-md-3">
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

            <div className="col-md-3">
              <label className="form-label fw-semibold">
                Project <span className="text-danger">*</span>
              </label>
              <select
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Choose Project --</option>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">
                State <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="Enter State..."
                className="form-control"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">
                District <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                placeholder="Enter District..."
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter Address..."
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
                <option value="">-- Choose Warehouse --</option>
                <option value="Main Store">Main Store</option>
                <option value="Branch Store">Branch Store</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Truck No <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="truckNo"
                value={formData.truckNo}
                onChange={handleInputChange}
                placeholder="Enter Truck..."
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Challan No <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="challanNo"
                value={formData.challanNo}
                onChange={handleInputChange}
                placeholder="Enter Challan No..."
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Dispatched Status <span className="text-danger">*</span>
              </label>
              <select
                name="dispatchedStatus"
                value={formData.dispatchedStatus}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Choose Status --</option>
                <option value="Pending">Pending</option>
                <option value="Dispatched">Dispatched</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Attach Document</label>
              <input
                type="file"
                name="document"
                onChange={handleFileChange}
                className="form-control"
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
                  <th>Purpose</th>
                  <th>Available Quantity</th>
                  <th>Quantity</th>
                  <th>Price (per piece)</th>
                  <th>Tax (per piece)</th>
                  <th>SubTotal</th>
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
                        <option value="Material">Material</option>
                        <option value="Product">Product</option>
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
                        <option value="Small">Small</option>
                        <option value="Large">Large</option>
                      </select>
                    </td>

                    <td>
                      <select
                        value={item.purpose}
                        onChange={(e) =>
                          handleOrderChange(index, "purpose", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">Select</option>
                        <option value="Installation">Installation</option>
                        <option value="Replacement">Replacement</option>
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
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) =>
                          handleOrderChange(index, "price", e.target.value)
                        }
                        className="form-control"
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={item.tax}
                        onChange={(e) =>
                          handleOrderChange(index, "tax", e.target.value)
                        }
                        className="form-control"
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        readOnly
                        value={item.subTotal}
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
              <tfoot>
                <tr>
                  <th colSpan="5" className="text-end">TOTAL</th>
                  <th>{totalQuantity}</th>
                  <th>{totalPrice.toFixed(2)}</th>
                  <th>{totalTax.toFixed(2)}</th>
                  <th>{totalSubTotal.toFixed(2)}</th>
                  <th></th>
                </tr>
              </tfoot>
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
              placeholder="Enter Remarks..."
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <div className="d-flex justify-content-between p-3">
            <button onClick={handleSubmit} className="btn btn-success px-4">
              Submit Form
            </button>
            <button onClick={handleCancel} className="btn btn-outline-primary px-4">
              Cancel
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
