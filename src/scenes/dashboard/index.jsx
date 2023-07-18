import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { Header } from "../../components/Header";
import { StatBox } from "../../components/StatBox";
import { allColors } from "../../theme";

const STAT_MOCK = {
  email: {
    icon: <EmailIcon />,
    stat: "123,456",
    title: "Emails Sent",
    progress: 0.88,
    increase: "+12%",
  },
  sales: {
    icon: <PointOfSaleIcon />,
    stat: "23,456",
    title: "Sales",
    progress: 0.66,
    increase: "+34%",
  },
  clients: {
    icon: <PersonAddIcon />,
    stat: "3,456",
    title: "New Clients",
    progress: 0.95,
    increase: "+5%",
  },
  traffic: {
    icon: <TrafficIcon />,
    stat: "4,567,890",
    title: "Traffic Received",
    progress: 0.33,
    increase: "+67%",
  },
};

export default function Dashboard() {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to dashboard"} />

        {/* DOWNLOAD BUTTON */}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* STAT & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* STAT ROW */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={STAT_MOCK.email.icon}
            stat={STAT_MOCK.email.stat}
            title={STAT_MOCK.email.title}
            progress={STAT_MOCK.email.progress}
            increase={STAT_MOCK.email.increase}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={STAT_MOCK.sales.icon}
            stat={STAT_MOCK.sales.stat}
            title={STAT_MOCK.sales.title}
            progress={STAT_MOCK.sales.progress}
            increase={STAT_MOCK.sales.increase}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={STAT_MOCK.clients.icon}
            stat={STAT_MOCK.clients.stat}
            title={STAT_MOCK.clients.title}
            progress={STAT_MOCK.clients.progress}
            increase={STAT_MOCK.clients.increase}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={STAT_MOCK.traffic.icon}
            stat={STAT_MOCK.traffic.stat}
            title={STAT_MOCK.traffic.title}
            progress={STAT_MOCK.traffic.progress}
            increase={STAT_MOCK.traffic.increase}
          />
        </Box>
      </Box>
    </Box>
  );
}
