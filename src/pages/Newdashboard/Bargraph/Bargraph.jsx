import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MoreVert } from "@material-ui/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PieChartWithTooltips from "./Piechart";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    backgroundColor: "#ffffff",
    height: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "#2c3e50",
  },
  viewDetails: {
    color: "#2196F3",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  legend: {
    display: "flex",
    gap: 20,
    marginBottom: 20,
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
  },
  legendText: {
    fontSize: 14,
    color: "#666",
  },
}));

const data = [
  { name: "Boots4", year2019: 42, year2018: 85 },
  { name: "Reign Pro", year2019: 82, year2018: 70 },
  { name: "Slick", year2019: 87, year2018: 60 },
  { name: "Falcon", year2019: 70, year2018: 50 },
  { name: "Sparrow", year2019: 78, year2018: 48 },
  { name: "Hideaway", year2019: 48, year2018: 68 },
  { name: "Freya", year2019: 78, year2018: 95 },
];

const TopProductsChart = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent style={{ padding: 24 }}>
        <Box className={classes.header}>
          <Typography className={classes.title}>Top Products</Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography className={classes.viewDetails}>
              View Details
            </Typography>
            <IconButton size="small">
              <MoreVert />
            </IconButton>
          </Box>
        </Box>

        <Box className={classes.legend}>
          <Box className={classes.legendItem}>
            <Box
              className={classes.legendDot}
              style={{ backgroundColor: "#2196F3" }}
            />
            <Typography className={classes.legendText}>2019</Typography>
          </Box>
          <Box className={classes.legendItem}>
            <Box
              className={classes.legendDot}
              style={{ backgroundColor: "#E0E0E0" }}
            />
            <Typography className={classes.legendText}>2018</Typography>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
            barGap={4}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#b0b0b0", fontSize: 13 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#b0b0b0", fontSize: 13 }}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: 8,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "rgba(33, 150, 243, 0.05)" }}
            />
            <Bar
              dataKey="year2019"
              fill="#2196F3"
              radius={[8, 8, 0, 0]}
              maxBarSize={35}
            />
            <Bar
              dataKey="year2018"
              fill="#E0E0E0"
              radius={[8, 8, 0, 0]}
              maxBarSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default function Barchart() {
  return (
    <Box className="pt-4">
      <Grid container spacing={3}>
        {/* Bar Chart - Takes 6 columns */}
        <Grid item xs={12} md={7}>
          <TopProductsChart />
        </Grid>

       {/* Pie  Chart takes 6 columns  */}
        <Grid item xs={12} md={5}>
        <PieChartWithTooltips/>
        </Grid>
      </Grid>
    </Box>
  );    
}
