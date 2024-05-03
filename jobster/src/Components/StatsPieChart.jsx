import React from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatsPieChart = () => {
  const { defaultStats } = useSelector((state) => state.jobState.status);

  // Convert defaultStats object into an array suitable for Recharts
  const data = [
    { name: "Pending", value: defaultStats.pending },
    { name: "Interview", value: defaultStats.interview },
    { name: "Declined", value: defaultStats.declined },
  ];

  // Define colors for each slice
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatsPieChart;
