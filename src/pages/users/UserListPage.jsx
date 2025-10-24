import React from "react";
import { Card, } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

export default function EmployeeListTable() {
  // Dummy data for demonstration
  const dummyData = [
    {
      employeeName: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      whatsappNumber: "9876543210",
      gender: "Male",
      bloodGroup: "B+",
      state: "Uttar Pradesh",
      city: "Lucknow",
      department: "IT Department",
      staffId: "EMP001",
      dateOfJoining: "2023-01-15",
      workingState: "Uttar Pradesh",
      workingCity: "Noida",
      salary: "45000",
      dateOfConfirmation: "2023-07-15",
      profileApprove: "Confirm",
    },
    {
      employeeName: "Priya Sharma",
      email: "priya.sharma@company.com",
      whatsappNumber: "9876543211",
      gender: "Female",
      bloodGroup: "O+",
      state: "Bihar",
      city: "Patna",
      department: "HR Department",
      staffId: "EMP002",
      dateOfJoining: "2023-03-20",
      workingState: "Bihar",
      workingCity: "Patna",
      salary: "38000",
      dateOfConfirmation: "2023-09-20",
      profileApprove: "Confirm",
    },
    {
      employeeName: "Amit Singh",
      email: "amit.singh@company.com",
      whatsappNumber: "9876543212",
      gender: "Male",
      bloodGroup: "A+",
      state: "Karnataka",
      city: "Bangalore",
      department: "Sales Department",
      staffId: "EMP003",
      dateOfJoining: "2023-05-10",
      workingState: "Karnataka",
      workingCity: "Bangalore",
      salary: "42000",
      dateOfConfirmation: "2023-11-10",
      profileApprove: "Confirm",
    },
    {
      employeeName: "Sneha Patel",
      email: "sneha.patel@company.com",
      whatsappNumber: "9876543213",
      gender: "Female",
      bloodGroup: "AB+",
      state: "Jammu",
      city: "Jammu",
      department: "Finance Department",
      staffId: "EMP004",
      dateOfJoining: "2023-02-28",
      workingState: "Jammu",
      workingCity: "Jammu",
      salary: "50000",
      dateOfConfirmation: "2023-08-28",
      profileApprove: "Confirm",
    },
    {
      employeeName: "Vikram Yadav",
      email: "vikram.yadav@company.com",
      whatsappNumber: "9876543214",
      gender: "Male",
      bloodGroup: "O-",
      state: "Himachal Pradesh",
      city: "Shimla",
      department: "Operations",
      staffId: "EMP005",
      dateOfJoining: "2024-01-05",
      workingState: "Himachal Pradesh",
      workingCity: "Shimla",
      salary: "35000",
      dateOfConfirmation: "2024-07-05",
      profileApprove: "Pending",
    },
    {
      employeeName: "Anjali Verma",
      email: "anjali.verma@company.com",
      whatsappNumber: "9876543215",
      gender: "Female",
      bloodGroup: "B-",
      state: "Uttar Pradesh",
      city: "Varanasi",
      department: "Marketing",
      staffId: "EMP006",
      dateOfJoining: "2023-06-15",
      workingState: "Uttar Pradesh",
      workingCity: "Lucknow",
      salary: "40000",
      dateOfConfirmation: "2023-12-15",
      profileApprove: "Confirm",
    },
    {
      employeeName: "Rahul Gupta",
      email: "rahul.gupta@company.com",
      whatsappNumber: "9876543216",
      gender: "Male",
      bloodGroup: "A-",
      state: "Kashmir",
      city: "Srinagar",
      department: "IT Department",
      staffId: "EMP007",
      dateOfJoining: "2023-08-01",
      workingState: "Kashmir",
      workingCity: "Srinagar",
      salary: "48000",
      dateOfConfirmation: "2024-02-01",
      profileApprove: "Confirm",
    },
    {
      employeeName: "Neha Joshi",
      email: "neha.joshi@company.com",
      whatsappNumber: "9876543217",
      gender: "Female",
      bloodGroup: "O+",
      state: "Tripura",
      city: "Agartala",
      department: "Admin",
      staffId: "EMP008",
      dateOfJoining: "2024-02-10",
      workingState: "Tripura",
      workingCity: "Agartala",
      salary: "32000",
      dateOfConfirmation: "2024-08-10",
      profileApprove: "Pending",
    },
  ];

  // Try to get data from localStorage, fallback to dummy data
  const data = JSON.parse(localStorage.getItem("employeeData")) || dummyData;

  const columns = [
    "Employee Name",
    "Email Address",
    "Whatsapp Number",
    "Gender",
    "Blood Group",
    "State",
    "City",
    "Department",
    "Staff Id",
    "Date of Joining",
    "Working State",
    "Working City",
    "Salary",
    "Date of Confirmation",
    "Profile Approve",
  ];

  const tableData = data.map((d) => [
    d.employeeName,
    d.email,
    d.whatsappNumber,
    d.gender,
    d.bloodGroup,
    d.state,
    d.city,
    d.department,
    d.staffId,
    d.dateOfJoining,
    d.workingState,
    d.workingCity,
    d.salary,
    d.dateOfConfirmation,
    d.profileApprove,
  ]);

  return (
    <Card container>
      {/* <Grid item xs={12}>
        <div>
          <h2>Employee List</h2>
        </div>
      </Grid> */}

      <div>
        <div style={{ backgroundColor: "#eeeeeeff" }}>
        <h4 className="text-dark fs-5 p-3">ALL User List </h4>
          </div>
        <MUIDataTable
        className="mt-0 pt-0"
            title="Employee Details"
          data={tableData}
          columns={columns}
          options={{
            filterType: "checkbox",
            selectableRows: "none",
            responsive: "standard",
            print: true,
            download: true,
            viewColumns: true,
            filter: true,
            search: true,
          }}
        />
      </div>
    </Card>
  );
}
