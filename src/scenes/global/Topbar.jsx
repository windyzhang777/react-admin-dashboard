import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, InputBase, useTheme } from "@mui/material";
import React from "react";
import UseColorModeContext from "../../hooks/useColorModeContext";
import { tokens } from "../../theme";

export default function Topbar({}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = UseColorModeContext();

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* SEARCH BAR */}
      <Box display={"flex"} bgcolor={colors.primary[400]}>
        <InputBase />
      </Box>
      <Box display={"flex"} gap={1}>
        {/* DARK/LIGHT MODE */}
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
        {/* NOTIFICATION */}
        <NotificationsOutlinedIcon />
        {/* SETTINGS */}
        <SettingsOutlinedIcon />
        {/* USER */}
        <PersonOutlinedIcon />
      </Box>
    </Box>
  );
}
