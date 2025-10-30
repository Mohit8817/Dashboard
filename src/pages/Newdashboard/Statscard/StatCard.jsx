import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// Icons
import {
  ArrowUpward,
  ArrowDownward,
  People,
  TrendingUp,
  AccessTime,
  ExitToApp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 16,
    borderRadius: 12,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    backgroundColor: "#ffffff",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
    },
  },
  iconBox: {
    borderRadius: "50%",
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
  },
  blueIcon: {
    backgroundColor: "#E3F2FD",
    "& svg": {
      color: "#2196F3",
      fontSize: 28,
    },
  },
  greenIcon: {
    backgroundColor: "#E8F5E9",
    "& svg": {
      color: "#4CAF50",
      fontSize: 28,
    },
  },
  orangeIcon: {
    backgroundColor: "#FFF3E0",
    "& svg": {
      color: "#FF9800",
      fontSize: 28,
    },
  },
  purpleIcon: {
    backgroundColor: "#F3E5F5",
    "& svg": {
      color: "#9C27B0",
      fontSize: 28,
    },
  },
}));

const stats = [
  {
    title: "Users",
    value: "28.10k",
    change: "+16.24%",
    isUp: true,
    description: "This month",
    icon: <People />,
    colorClass: "blueIcon",
  },
  {
    title: "Sessions",
    value: "97.66k",
    change: "-3.96%",
    isUp: false,
    description: "vs. previous month",
    icon: <TrendingUp />,
    colorClass: "greenIcon",
  },
  {
    title: "Avg. Visit Duration",
    value: "3m 40sec",
    change: "-0.24%",
    isUp: false,
    description: "vs. previous month",
    icon: <AccessTime />,
    colorClass: "orangeIcon",
  },
  {
    title: "Bounce Rate",
    value: "33.48%",
    change: "+7.05%",
    isUp: true,
    description: "vs. previous month",
    icon: <ExitToApp />,
    colorClass: "purpleIcon",
  },
];

const StatCard = ({ title, value, change, description, isUp, icon, colorClass }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
            style={{ fontWeight: 600, fontSize: 14 }}
          >
            {title}
          </Typography>
          <Box className={`${classes.iconBox} ${classes[colorClass]}`}>
            {icon}
          </Box>
        </Box>

        <Typography variant="h4" style={{ fontWeight: 700, marginBottom: 8, color: "#1a1a1a" }}>
          {value}
        </Typography>

        <Box display="flex" alignItems="center">
          {isUp ? (
            <ArrowUpward
              fontSize="small"
              style={{ color: "#4CAF50" }}
            />
          ) : (
            <ArrowDownward
              fontSize="small"
              style={{ color: "#f44336" }}
            />
          )}
          <Typography
            variant="body2"
            style={{
              fontWeight: 600,
              color: isUp ? "#4CAF50" : "#f44336",
              marginLeft: 4,
              fontSize: 13,
            }}
          >
            {change}
          </Typography>
          <Typography
            variant="body2"
            style={{ marginLeft: 6, color: "#999", fontSize: 13 }}
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
    <Box>
      <Grid container spacing={3}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}