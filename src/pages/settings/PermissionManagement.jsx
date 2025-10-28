import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const PermissionManagement = ({ selectedRole, onClose }) => {
  const [permissions, setPermissions] = useState({
    Product: { view: false, add: false, edit: false, delete: false, approval: false },
    Adjustment: { view: false, add: false, edit: false, delete: false, approval: false },
    Expense: { view: false, add: false, edit: false, delete: false, approval: false },
    Purchase: { view: false, add: false, edit: false, delete: false, approval: false },
    Dispatch: { view: false, add: false, edit: false, delete: false, approval: false },
    Employee: { view: false, add: false, edit: false, delete: false, approval: false },
    Settings: { view: false, add: false, edit: false, delete: false, approval: false },
  });

  const handleCheckboxChange = (module, field) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: { ...prev[module], [field]: !prev[module][field] },
    }));
  };

  const handleSelectAll = (module) => {
    const allChecked = Object.values(permissions[module]).every((v) => v);
    const updated = Object.keys(permissions[module]).reduce((acc, key) => {
      acc[key] = !allChecked;
      return acc;
    }, {});
    setPermissions((prev) => ({ ...prev, [module]: updated }));
  };

  return (
    <div
      className="bg-white rounded shadow p-4"
      style={{
        width: "950px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "90vh",
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {selectedRole ? selectedRole.name : ""} - Permission Management
      </Typography>
      <Container component={Paper}>
        <Table>
          <TableHead style={{ background: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Module Name</TableCell>
              <TableCell>All</TableCell>
              <TableCell align="center">View</TableCell>
              <TableCell align="center">Add</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Approval</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(permissions).map((module) => (
              <TableRow key={module}>
                <TableCell>
                  <Typography style={{ fontWeight: 500 }}>{module}</Typography>
                </TableCell>
                <TableCell>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Object.values(permissions[module]).every((v) => v)}
                        onChange={() => handleSelectAll(module)}
                        color="primary"
                      />
                    }
                    label="All"
                  />
                </TableCell>
                {["view", "add", "edit", "delete", "approval"].map((perm) => (
                  <TableCell key={perm} align="center">
                    <Checkbox
                      checked={permissions[module][perm]}
                      onChange={() => handleCheckboxChange(module, perm)}
                      color="primary"
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>

      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button variant="outlined" color="primary" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("Permissions saved successfully!");
            onClose();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default PermissionManagement;
