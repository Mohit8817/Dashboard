import { Card } from "@material-ui/core";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function AddPurchase() {
  const [formData, setFormData] = useState({
    date: "",
    document: null,
    warehouse: "",
    supplier: "",
    purchaseStatus: "",
    termsConditions: "",
    orderList: [],
    orderTax: "No Tax",
    discount: 0,
    shippingCost: 0,
    subTotal: 0,
    grandTotal: 0,
  });

  const [value, setValue] = useState(""); // For Terms & Conditions
  const [orderList, setOrderList] = useState([
    {
      productType: "",
      productName: "",
      productVariant: "",
      availableQuantity: 0,
      productQuantity: 0,
      price: 0,
      tax: 0,
      totalPrice: 0,
      totalTax: 0,
      subTotal: 0,
    },
  ]);

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

  const handleOrderChange = (index, field, value) => {
    const updatedOrders = [...orderList];
    updatedOrders[index][field] = value;
    setOrderList(updatedOrders);
  };

  const addOrderRow = () => {
    setOrderList((prev) => [
      ...prev,
      {
        productType: "",
        productName: "",
        productVariant: "",
        availableQuantity: 0,
        productQuantity: 0,
        price: 0,
        tax: 0,
        totalPrice: 0,
        totalTax: 0,
        subTotal: 0,
      },
    ]);
  };

  const removeOrderRow = (index) => {
    const updated = orderList.filter((_, i) => i !== index);
    setOrderList(updated);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Order List:", orderList);
    alert("Purchase Added Successfully!");
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid p-0">
      <Card className="">
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">Add Purchase</h4>
        </div>

        {/* Body */}
        <div className="p-3">
          <p>The field labels marked with * are required input fields.</p>

          {/* Basic Info */}
          <h5 className="fw-semibold mb-3 mt-4">Purchase Details</h5>
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
                Attach Document
              </label>
              <input
                type="file"
                name="document"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>

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
                <option value="">Select...</option>
                <option value="Warehouse 1">Warehouse 1</option>
                <option value="Warehouse 2">Warehouse 2</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Supplier <span className="text-danger">*</span>
              </label>
              <select
                name="supplier"
                value={formData.supplier}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select Supplier...</option>
                <option value="Supplier A">Supplier A</option>
                <option value="Supplier B">Supplier B</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Purchase Status <span className="text-danger">*</span>
              </label>
              <select
                name="purchaseStatus"
                value={formData.purchaseStatus}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Choose Status --</option>
                <option value="Ordered">Ordered</option>
                <option value="Received">Received</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-4">
            <label className="form-label fw-semibold">
              Terms & Conditions
            </label>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="Write terms & conditions..."
              style={{ height: "200px", backgroundColor: "white" }}
            />
          </div>

          {/* Order List */}
          <h5 className="fw-semibold mb-3 mt-5">Order List</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Product Type</th>
                  <th>Product Name</th>
                  <th>Product Variant</th>
                  <th>Available Qty</th>
                  <th>Order Qty</th>
                  <th>Price (₹)</th>
                  <th>Tax %</th>
                  <th>Total Price</th>
                  <th>Total Tax</th>
                  <th>SubTotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((order, index) => (
                  <tr key={index}>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={order.productType}
                        onChange={(e) =>
                          handleOrderChange(index, "productType", e.target.value)
                        }
                      >
                        <option value="">--Choose--</option>
                        <option value="Type A">Type A</option>
                        <option value="Type B">Type B</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={order.productName}
                        onChange={(e) =>
                          handleOrderChange(index, "productName", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={order.productVariant}
                        onChange={(e) =>
                          handleOrderChange(
                            index,
                            "productVariant",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={order.availableQuantity}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={order.productQuantity}
                        onChange={(e) =>
                          handleOrderChange(
                            index,
                            "productQuantity",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={order.price}
                        onChange={(e) =>
                          handleOrderChange(index, "price", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        value={order.tax}
                        onChange={(e) =>
                          handleOrderChange(index, "tax", e.target.value)
                        }
                      />
                    </td>
                    <td>{order.totalPrice}</td>
                    <td>{order.totalTax}</td>
                    <td>{order.subTotal}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeOrderRow(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={addOrderRow}
            >
              Add Product
            </button>
          </div>

          {/* Totals Section */}
          <div className="row g-3 mt-4">
            <div className="col-md-3">
              <label className="form-label fw-semibold">Order Tax</label>
              <select
                name="orderTax"
                value={formData.orderTax}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="No Tax">No Tax</option>
                <option value="GST 5%">GST 5%</option>
                <option value="GST 18%">GST 18%</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">Discount (₹)</label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">Shipping Cost (₹)</label>
              <input
                type="number"
                name="shippingCost"
                value={formData.shippingCost}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          {/* Totals Display */}
          <div className="mt-4">
            <p>Products: {orderList.length}</p>
            <p>Sub Total: ₹{formData.subTotal}</p>
            <p>Order Tax: ₹0</p>
            <p>Order Discount: ₹{formData.discount}</p>
            <p>Shipping Cost: ₹{formData.shippingCost}</p>
            <h5 className="fw-bold">Grand Total: ₹{formData.grandTotal}</h5>
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
