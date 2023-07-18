import { Box, useTheme } from "@mui/material";
import React from "react";
import { GeographyChart } from "../../components/GeographyChart";
import { Header } from "../../components/Header";
import { allColors } from "../../theme";

export default function Geography() {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={1}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}
