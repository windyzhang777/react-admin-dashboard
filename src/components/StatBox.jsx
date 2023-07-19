import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { allColors } from "../theme";
import { ProgressCircle } from "./ProgressCircle";

export const StatBox = ({ icon, stat, desc, progress, increase }) => {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      {/* ICON & STAT & PROGRESS */}
      <Box display="flex" justifyContent="space-between">
        <Box
          sx={{
            "& svg.MuiSvgIcon-root": {
              color: colors.greenAccent[600],
              fontSize: "26px",
            },
          }}
        >
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {parseFloat(stat).toLocaleString("en-US")}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      {/* TITLE & INCREASE */}
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {desc}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};
