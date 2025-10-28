import React, { useState } from "react";
import {
  Button,
  Card,
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
  useMediaQuery,
  useTheme,
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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
    <Card
      elevation={4}
      style={{
        width: isSmallScreen ? "95%" : "90%",
        maxWidth: isSmallScreen ? "95%" : "950px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: isSmallScreen ? "16px" : "24px",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h6" gutterBottom align="center">
        {selectedRole ? selectedRole.name : "Role"} - Permission Management
      </Typography>

      <Container component={Paper} style={{ padding: 0 }}>
        <div style={{ overflowX: "auto" }}>
          <Table size={isSmallScreen ? "small" : "medium"}>
            <TableHead style={{ background: "#f5f5f5" }}>
              <TableRow>
                <TableCell style={{ fontWeight: 600 }}>Module Name</TableCell>
                <TableCell style={{ fontWeight: 600 }}>All</TableCell>
                <TableCell align="center" style={{ fontWeight: 600 }}>
                  View
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 600 }}>
                  Add
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 600 }}>
                  Edit
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 600 }}>
                  Delete
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 600 }}>
                  Approval
                </TableCell>
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
                          size={isSmallScreen ? "small" : "medium"}
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
                        size={isSmallScreen ? "small" : "medium"}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={onClose}
          fullWidth={isSmallScreen}
        >
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("Permissions saved successfully!");
            onClose();
          }}
          fullWidth={isSmallScreen}
        >
          Save
        </Button>
      </div>
    </Card>
  );
};

export default PermissionManagement;
