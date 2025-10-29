import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

// Icons — same source as your other files
import { ArrowUpward, ArrowDownward, People, TrendingUp, AccessTime, ExitToApp } from "@material-ui/icons";

const stats = [
  {
    title: "Users",
    value: "28.10k",
    change: "+16.24%",
    isUp: true,
    description: "vs. previous month",
    icon: <People color="primary" style={{ fontSize: 35 }} />,
  },
  {
    title: "Sessions",
    value: "97.66k",
    change: "-3.96%",
    isUp: false,
    description: "vs. previous month",
    icon: <TrendingUp color="primary" style={{ fontSize: 35 }} />,
  },
  {
    title: "Avg. Visit Duration",
    value: "3m 40sec",
    change: "-0.24%",
    isUp: false,
    description: "vs. previous month",
    icon: <AccessTime color="primary" style={{ fontSize: 35 }} />,
  },
  {
    title: "Bounce Rate",
    value: "33.48%",
    change: "+7.05%",
    isUp: true,
    description: "vs. previous month",
    icon: <ExitToApp color="primary" style={{ fontSize: 35 }} />,
  },
];

const StatCard = ({ title, value, change, description, isUp, icon }) => {
  const theme = useTheme();

  return (
    <Card
      style={{
        padding: 16,
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Box
            style={{
              backgroundColor: theme.palette.primary.light,
              borderRadius: "50%",
              padding: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        </Box>

        <Typography variant="h5" style={{ fontWeight: 700, marginBottom: 8 }}>
          {value}
        </Typography>

        <Box display="flex" alignItems="center">
          {isUp ? (
            <ArrowUpward
              fontSize="small"
              style={{ color: theme.palette.success.main }}
            />
          ) : (
            <ArrowDownward
              fontSize="small"
              style={{ color: theme.palette.error.main }}
            />
          )}
          <Typography
            variant="body2"
            style={{
              fontWeight: 500,
              color: isUp
                ? theme.palette.success.main
                : theme.palette.error.main,
              marginLeft: 4,
            }}
          >
            {change}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginLeft: 6 }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function DashboardCards() {
  return (
    <Grid container spacing={3}>
      {stats.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
