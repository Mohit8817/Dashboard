import React from "react";
import { Card } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

export default function ViewProduct() {
  // Dummy data for demonstration
  const dummyData = [
    {
      category: "Electronics",
      name: "Laptop Dell Inspiron",
      maker: "Dell Inc.",
      warehouse: "Jammu Warehouse",
      capacity: "256GB SSD",
      quantity: "50",
      units: "Pieces",
      dateAdded: "2024-01-15",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=100",
    },
    {
      category: "Electronics",
      name: "Mobile Samsung Galaxy",
      maker: "Samsung",
      warehouse: "Delhi Warehouse",
      capacity: "128GB",
      quantity: "100",
      units: "Pieces",
      dateAdded: "2024-02-20",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100",
    },
    {
      category: "Furniture",
      name: "Office Chair Executive",
      maker: "Godrej",
      warehouse: "Mumbai Warehouse",
      capacity: "150kg",
      quantity: "75",
      units: "Pieces",
      dateAdded: "2024-03-10",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=100",
    },
    {
      category: "Stationery",
      name: "A4 Paper Ream",
      maker: "JK Paper",
      warehouse: "Bangalore Warehouse",
      capacity: "500 Sheets",
      quantity: "200",
      units: "Boxes",
      dateAdded: "2024-01-25",
      image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=100",
    },
    {
      category: "Electronics",
      name: "Printer HP LaserJet",
      maker: "HP Inc.",
      warehouse: "Jammu Warehouse",
      capacity: "20 ppm",
      quantity: "30",
      units: "Pieces",
      dateAdded: "2024-02-15",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=100",
    },
    {
      category: "Beverages",
      name: "Water Bottle Pack",
      maker: "Bisleri",
      warehouse: "Delhi Warehouse",
      capacity: "1 Liter",
      quantity: "500",
      units: "Pieces",
      dateAdded: "2024-03-01",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=100",
    },
    {
      category: "Office Supplies",
      name: "Whiteboard Marker Set",
      maker: "Camlin",
      warehouse: "Mumbai Warehouse",
      capacity: "Pack of 10",
      quantity: "150",
      units: "Boxes",
      dateAdded: "2024-01-30",
      image: "https://images.unsplash.com/photo-1611532736570-c8bb83f8bb4e?w=100",
    },
    {
      category: "Electronics",
      name: "Wireless Mouse Logitech",
      maker: "Logitech",
      warehouse: "Bangalore Warehouse",
      capacity: "2.4GHz",
      quantity: "120",
      units: "Pieces",
      dateAdded: "2024-02-28",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100",
    },
  ];

  const columns = [
    {
      name: "image",
      label: "Image",
      options: {
        customBodyRender: (value) => (
          <img
            src={value}
            alt="Product"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        ),
        filter: false,
        sort: false,
      },
    },
    {
      name: "category",
      label: "Category",
    },
    {
      name: "name",
      label: "Product Name",
    },
    {
      name: "maker",
      label: "Maker",
    },
    {
      name: "warehouse",
      label: "Warehouse",
    },
    {
      name: "capacity",
      label: "Capacity",
    },
    {
      name: "quantity",
      label: "Quantity",
    },
    {
      name: "units",
      label: "Units",
    },
    {
      name: "dateAdded",
      label: "Date Added",
    },
  ];

  const tableData = dummyData.map((d) => [
    d.image,
    d.category,
    d.name,
    d.maker,
    d.warehouse,
    d.capacity,
    d.quantity,
    d.units,
    d.dateAdded,
  ]);

  return (
    <Card container>
      <div>
        <div style={{ backgroundColor: "#eeeeeeff" }}>
          <h4 className="text-dark fs-5 p-3">ALL Product List</h4>
        </div>
        <MUIDataTable
          className="mt-0 pt-0"
          title="Product Details"
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