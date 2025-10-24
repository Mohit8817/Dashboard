import { Card } from "@material-ui/core";
import React, { useState } from "react";

export default function AddUserPage() {
  const [formData, setFormData] = useState({
    employeeName: "",
    email: "",
    whatsappNumber: "",
    gender: "",
    bloodGroup: "",
    employeeImage: null,
    state: "",
    city: "",
    permanentAddress: "",
    temporaryAddress: "",
    department: "",
    staffId: "",
    dateOfJoining: "",
    workingState: "",
    workingCity: "",
    salary: "",
    workingAddress: "",
    dateOfConfirmation: "",
    profileApprove: "",
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
    alert("Form submitted successfully!");
  };

  const handleCancel = () => {
    setFormData({
      employeeName: "",
      email: "",
      whatsappNumber: "",
      gender: "",
      bloodGroup: "",
      employeeImage: null,
      state: "",
      city: "",
      permanentAddress: "",
      temporaryAddress: "",
      department: "",
      staffId: "",
      dateOfJoining: "",
      workingState: "",
      workingCity: "",
      salary: "",
      workingAddress: "",
      dateOfConfirmation: "",
      profileApprove: "",
    });
  };

  return (
    <div className="container-fluid p-0">
      <Card className="">
        {/* Header */}
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">Add New user</h4>
        </div>

        {/* Form */}
        <div className="p-3">
          <p>The field labels marked with * are mandatory input fields.</p>

          {/* Personal Detail Section */}
          <h5 className="fw-semibold mb-3 mt-4">Personal Detail</h5>
          <div className="row g-3">
            {/* Employee Name */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Employee Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Email Address */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Whatsapp Number */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Whatsapp Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Gender */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Gender <span className="text-danger">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Blood Group */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Employee Image */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Employee Image</label>
              <input
                type="file"
                name="employeeImage"
                onChange={handleFileChange}
                className="form-control"
                accept="image/*"
              />
            </div>

            {/* State */}
            <div className="col-6">
              <label className="form-label fw-semibold">
                State <span className="text-danger">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Select an option --</option>
                <option value="Bihar">Bihar</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu">Jammu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>

            {/* City */}
            <div className="col-6">
              <label className="form-label fw-semibold">
                City <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Permanent Address */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Permanent Address <span className="text-danger">*</span>
              </label>
              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
              />
            </div>

            {/* Temporary Address */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Temporary Address
              </label>
              <textarea
                name="temporaryAddress"
                value={formData.temporaryAddress}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
              />
            </div>
          </div>

          {/* Professional Detail Section */}
          <h5 className="fw-semibold mb-3 mt-5">Professional Detail</h5>
          <div className="row g-3">
            {/* Department */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Department <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Staff Id */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Staff Id</label>
              <input
                type="text"
                name="staffId"
                value={formData.staffId}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Date of Joining */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Date of Joining <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Working State */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Working State <span className="text-danger">*</span>
              </label>
              <select
                name="workingState"
                value={formData.workingState}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Select an option --</option>
                <option value="Bihar">Bihar</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu">Jammu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>

            {/* Working City */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Working City <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="workingCity"
                value={formData.workingCity}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Salary */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Salary <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                className="form-control"
                step="0.01"
              />
            </div>

            {/* Working Address */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Working Address <span className="text-danger">*</span>
              </label>
              <textarea
                name="workingAddress"
                value={formData.workingAddress}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
              />
            </div>

            {/* Date of Confirmation */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">
                Date of Confirmation <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                name="dateOfConfirmation"
                value={formData.dateOfConfirmation}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            {/* Profile Approve */}
            <div className="col-md-3">
              <label className="form-label fw-semibold">
                Profile Approve <span className="text-danger">*</span>
              </label>
              <select
                name="profileApprove"
                value={formData.profileApprove}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">-- Select an option --</option>
                <option value="Confirm">Confirm</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

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
