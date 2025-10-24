import { Card } from "@material-ui/core";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    district: "",
    location: "",
    siteName: "",
    department: "",
    siteCode: "",
    feasibleSite: "",
    workOrderNo: "",
    workOrderDate: "",
    loaNo: "",
    phase: "",
    sanctionLoad: "",
    plantSanction: "",
    connectionPhase: "",
    caNo: "",
    payment70: "",
    payment70Doc: null,
    payment10: "",
    payment10Doc: null,
    amc1: "",
    amc2: "",
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
      district: "",
      location: "",
      siteName: "",
      department: "",
      siteCode: "",
      feasibleSite: "",
      workOrderNo: "",
      workOrderDate: "",
      loaNo: "",
      phase: "",
      sanctionLoad: "",
      plantSanction: "",
      connectionPhase: "",
      caNo: "",
      payment70: "",
      payment70Doc: null,
      payment10: "",
      payment10Doc: null,
      amc1: "",
      amc2: "",
    });
  };

  return (
    <>
      <div className="container-fluid p-0">
        <Card className="p-0 m-0">
          {/* Header */}
          <div style={{ backgroundColor: "#eeeeeeff" }}>
            <h4 className="text-dark fs-5 p-3">Add Jammu SRT 70MW</h4>
          </div>

          {/* Form */}
          <div className="p-3">
            <p>The field labels marked with * input fields.</p>
            <div className="row g-3">
              {/* District */}
              <div className="col-12">
                <label className="form-label fw-semibold">
                  District <span className="text-danger">*</span>
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">--Select district--</option>
                  <option value="JAMMU">JAMMU</option>
                  <option value="SAMBA">SAMBA</option>
                  <option value="KATHUA">KATHUA</option>
                  <option value="UDHAMPUR">UDHAMPUR</option>
                  <option value="KISHTWAR">KISHTWAR</option>
                  <option value="DODA">DODA</option>
                  <option value="RAMBAN">RAMBAN</option>
                  <option value="REASI">REASI</option>
                  <option value="RAJOURI">RAJOURI</option>
                  <option value="POONCH">POONCH</option>
                  <option value="NEW DELHI">NEW DELHI</option>
                </select>
              </div>

              {/* Location */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Location <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              {/* Name of the Site */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Name of the Site <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

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

              {/* Site Code */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Site Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="siteCode"
                  value={formData.siteCode}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              {/* Feasible Site */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Feasible Site <span className="text-danger">*</span>
                </label>
                <select
                  name="feasibleSite"
                  value={formData.feasibleSite}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>

              {/* Work Order No */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Work Order No. <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="workOrderNo"
                  value={formData.workOrderNo}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              {/* Work Order Date */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Work Order Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  name="workOrderDate"
                  value={formData.workOrderDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              {/* LOA No */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">LOA No.</label>
                <input
                  type="text"
                  name="loaNo"
                  value={formData.loaNo}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              {/* Phase */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">Phase</label>
                <select
                  name="phase"
                  value={formData.phase}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="NA">NA</option>
                  <option value="Phase 1">Phase 1</option>
                  <option value="Phase 2">Phase 2</option>
                  <option value="Phase 3">Phase 3</option>
                  <option value="Phase 4">Phase 4</option>
                  <option value="Phase 5">Phase 5</option>
                  <option value="Phase 6">Phase 6</option>
                  <option value="Phase 7">Phase 7</option>
                </select>
              </div>

              {/* Sanction load in kwp */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Sanction load in kwp
                </label>
                <input
                  type="number"
                  name="sanctionLoad"
                  value={formData.sanctionLoad}
                  onChange={handleInputChange}
                  className="form-control"
                  step="0.01"
                />
              </div>

              {/* Plant Sanction in kwp */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Plant Sanction in kwp
                </label>
                <input
                  type="number"
                  name="plantSanction"
                  value={formData.plantSanction}
                  onChange={handleInputChange}
                  className="form-control"
                  step="0.01"
                />
              </div>

              {/* Connection Phase */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Connection Phase
                </label>
                <select
                  name="connectionPhase"
                  value={formData.connectionPhase}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="SINGLE PHASE">SINGLE PHASE</option>
                  <option value="DOUBLE PHASE">DOUBLE PHASE</option>
                  <option value="THREE PHASE">THREE PHASE</option>
                </select>
              </div>

              {/* CA No */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">CA No.</label>
                <input
                  type="text"
                  name="caNo"
                  value={formData.caNo}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              {/* Payment 70% */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">Payment 70%</label>
                <select
                  name="payment70"
                  value={formData.payment70}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>

              {/* Payment 70% Document */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Payment 70% Document
                </label>
                <input
                  type="file"
                  name="payment70Doc"
                  onChange={handleFileChange}
                  className="form-control"
                />
              </div>

              {/* Payment 10% */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">Payment 10%</label>
                <select
                  name="payment10"
                  value={formData.payment10}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>

              {/* Payment 10% Document */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Payment 10% Document
                </label>
                <input
                  type="file"
                  name="payment10Doc"
                  onChange={handleFileChange}
                  className="form-control"
                />
              </div>

              {/* 1st AMC 4% */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">1st AMC 4%</label>
                <select
                  name="amc1"
                  value={formData.amc1}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>

              {/* 2nd AMC 4% */}
              <div className="col-md-4">
                <label className="form-label fw-semibold">2nd AMC 4%</label>
                <select
                  name="amc2"
                  value={formData.amc2}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">-- Select --</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#eeeeeeff" }}>
            <div className="d-flex justify-content-between mt-4 p-3">
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
    </>
  );
}
