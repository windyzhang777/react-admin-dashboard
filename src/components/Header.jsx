import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { allColors } from "../theme";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);
  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        mb={"5px"}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
