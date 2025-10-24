import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

export default function Tables() {
  return (
    <>
      <PageTitle title="Tables" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}



// import React from "react";
// import { Grid } from "@material-ui/core";
// import MUIDataTable from "mui-datatables";

// export default function TablePage() {
//   const data = JSON.parse(localStorage.getItem("submittedData")) || [];

//   const columns = [
//     "District",
//     "Location",
//     "Site Name",
//     "Department",
//     "Site Code",
//     "Feasible Site",
//     "Work Order No",
//     "Work Order Date",
//   ];

//   const tableData = data.map((d) => [
//     d.district,
//     d.location,
//     d.siteName,
//     d.department,
//     d.siteCode,
//     d.feasibleSite,
//     d.workOrderNo,
//     d.workOrderDate,
//   ]);

//   return (
//     <Grid container>
//       <Grid item xs={12}>
//         <div>
//           <h2>Submitted Sites</h2>         
//         </div>
//       </Grid>

//       <Grid item xs={12}>
//         <MUIDataTable
//           title="Jammu SRT 70MW Sites"
//           data={tableData}
//           columns={columns}
//           options={{ filterType: "checkbox", selectableRows: "none" }}
//         />
//       </Grid>
//     </Grid>
//   );
// }
