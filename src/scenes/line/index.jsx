import { Box } from "@mui/material";
import React from "react";
import { LineChart } from "../../components/LineChart";
import { Header } from "../../components/Header";

export default function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
