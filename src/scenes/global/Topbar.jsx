import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React from "react";
import UseColorModeContext from "../../hooks/useColorModeContext";
import { allColors } from "../../theme";

export default function Topbar() {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);
  const { toggleColorMode } = UseColorModeContext();

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* SEARCH BAR */}
      <Box display={"flex"} bgcolor={colors.primary[400]} borderRadius={1}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display={"flex"}>
        {/* DARK/LIGHT MODE */}
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* NOTIFICATION */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        {/* SETTINGS */}
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        {/* USER */}
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
