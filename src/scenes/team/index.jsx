import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import { allColors } from "../../theme";

export default function Team() {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age" },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access level",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width={"100px"}
          m={"0 auto"}
          p={"5px"}
          display={"flex"}
          justifyContent={"center"}
          bgcolor={
            access === "admin"
              ? colors.greenAccent[600]
              : access === "manager"
              ? colors.greenAccent[700]
              : colors.greenAccent[700]
          }
          borderRadius={"4px"}
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} ml={"5px"}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m={"20px"}>
      <Header title={"TEAM"} subtitle={"Managing team members"} />
      <Box
        m={"40px 0 0 0"}
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}
