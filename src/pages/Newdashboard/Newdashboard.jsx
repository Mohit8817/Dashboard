import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import DashboardCards from "./Statscard/StatCard";
import CleanLineChart from "./Linechart/Linechart";
import Barchart from "./Bargraph/Bargraph";

const Newdashboard = () => {
  return (
    <Grid sx={{ mt: 4, mb: 4 }}>
      {/* Page Title */}
      <Box mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Dashboard Overview
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Key performance metrics compared to previous month
        </Typography>
      </Box>

      <DashboardCards />
      <CleanLineChart />
      <Barchart />
    </Grid>
  );
};

export default Newdashboard;
