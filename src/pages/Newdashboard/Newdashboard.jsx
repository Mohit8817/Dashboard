import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import DashboardCards from "./Statscard/StatCard";

const Newdashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Page Title */}
             <Box mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Dashboard Overview
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Key performance metrics compared to previous month
        </Typography>        
      </Box>

     <DashboardCards/>
    </Container>
  );
};

export default Newdashboard;
