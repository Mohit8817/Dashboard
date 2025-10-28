import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  TextField,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete, Security } from "@material-ui/icons";
import MUIDataTable from "mui-datatables";
import PermissionManagement from "./PermissionManagement"; 

const RoleManagement = () => {
  const [open, setOpen] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [roles, setRoles] = useState([
    { name: "Admin", description: "Full access" },
    { name: "Testing Admin", description: "Employee management" },
  ]);
  const [editIndex, setEditIndex] = useState(null);

  // modal open/close for add/edit
  const handleOpen = () => {
    setEditIndex(null);
    setName("");
    setDescription("");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // permission modal
  const handlePermissionOpen = (role) => {
    setSelectedRole(role);
    setOpenPermission(true);
  };
  const handlePermissionClose = () => setOpenPermission(false);

  // save role
  const handleSave = () => {
    if (!name || !description) {
      alert("Please fill all required fields!");
      return;
    }
    const newRole = { name, description };
    if (editIndex !== null) {
      const updated = [...roles];
      updated[editIndex] = newRole;
      setRoles(updated);
    } else {
      setRoles([...roles, newRole]);
    }
    handleClose();
  };

  // edit/delete
  const handleEdit = (index) => {
    const item = roles[index];
    setName(item.name);
    setDescription(item.description);
    setEditIndex(index);
    setOpen(true);
  };
  const handleDelete = (index) => {
    if (window.confirm("Delete this role?")) {
      setRoles(roles.filter((_, i) => i !== index));
    }
  };

  // columns
  const columns = [
    { name: "name", label: "Role Name" },
    { name: "description", label: "Description" },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRenderLite: (dataIndex) => {
          const role = roles[dataIndex];
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <IconButton color="primary" onClick={() => handleEdit(dataIndex)}>
                <Edit fontSize="small" />
              </IconButton>
              <IconButton color="secondary" onClick={() => handleDelete(dataIndex)}>
                <Delete fontSize="small" />
              </IconButton>
              <IconButton
                color="default"
                title="Permission Settings"
                onClick={() => handlePermissionOpen(role)}
              >
                <Security fontSize="small" />
              </IconButton>
            </div>
          );
        },
      },
    },
  ];

  return (
    <Card>
      {/* Header */}
      <div style={{ background: "#f3f3f3", padding: "10px 20px" }}>
        <h4 className="mb-0">Role Management</h4>
      </div>

      {/* Add Role */}
      <div className="p-3 d-flex justify-content-end">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Role
        </Button>
      </div>

      {/* Table */}
      <MUIDataTable
        title="Role List"
        data={roles}
        columns={columns}
        options={{
          selectableRows: "none",
          rowsPerPage: 5,
          responsive: "standard",
        }}
      />

      {/* Add/Edit Modal */}
      <Modal open={open} onClose={handleClose}>
        <div
          className="bg-white rounded shadow p-4"
          style={{
            width: "400px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h5>{editIndex !== null ? "Edit Role" : "Add Role"}</h5>
          <TextField
            label="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            className="mt-3"
          />
          <TextField
            label="Description *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            className="mt-3"
          />
          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Permission Modal */}
      <Modal open={openPermission} onClose={handlePermissionClose}>
        <PermissionManagement
          selectedRole={selectedRole}
          onClose={handlePermissionClose}
        />
      </Modal>
    </Card>
  );
};

export default RoleManagement;
