import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  Box,
  IconButton 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MoreVert } from "@material-ui/icons";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles(() => ({
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
    marginBottom: 16,
    paddingBottom: 16,
    borderBottom: "1px solid #f0f0f0",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: "#2c3e50",
  },
  chartContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 350,
  },
}));

const pieChartData = [
  { name: "Group A", value: 400, color: "#2196F3" },
  { name: "Group B", value: 300, color: "#4CAF50" },
  { name: "Group C", value: 300, color: "#FF9800" },
  { name: "Group D", value: 200, color: "#9C27B0" },
];

function renderActiveShape(props) {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={14} fontWeight={600}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#2196f3"
        fontSize={13}
        fontWeight={600}
      >
        {`Value ${value}`}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#000"
        fontSize={12}
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}

const PieChartWithTooltips = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Card className={classes.card}>
      <CardContent style={{ padding: 50 }}>
        <Box className={classes.header}>
          <Typography className={classes.title}>
            Pie Chart with Tooltips
          </Typography>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Box>

        <Box className={classes.chartContainer}>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>

        {/* Legend */}
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            marginTop: 16,
            flexWrap: "wrap",
          }}
        >
          {pieChartData.map((item, index) => (
            <Box
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(index)}
            >
              <Box
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                }}
              />
              <Typography style={{ fontSize: 13, color: "#666" }}>
                {item.name}
              </Typography>
              <Typography style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PieChartWithTooltips;