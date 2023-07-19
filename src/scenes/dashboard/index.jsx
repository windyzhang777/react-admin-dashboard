import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { BarChart } from "../../components/BarChart";
import { GeographyChart } from "../../components/GeographyChart";
import { Header } from "../../components/Header";
import { LineChart } from "../../components/LineChart";
import { PieChart } from "../../components/PieChart";
import { StatBox } from "../../components/StatBox";
import { mockTransactions } from "../../data/mockData";
import { allColors } from "../../theme";

const MOCK_STAT = {
  email: {
    icon: <EmailIcon />,
    stat: 123456,
    desc: "Emails Sent",
    progress: 0.88,
    increase: "+12%",
  },
  sales: {
    icon: <PointOfSaleIcon />,
    stat: 23456,
    desc: "Sales",
    progress: 0.66,
    increase: "+34%",
  },
  clients: {
    icon: <PersonAddIcon />,
    stat: 3456,
    desc: "New Clients",
    progress: 0.95,
    increase: "+5%",
  },
  traffic: {
    icon: <TrafficIcon />,
    stat: 4567890,
    desc: "Traffic Received",
    progress: 0.33,
    increase: "+67%",
  },
};

const MOCK_CHART = {
  revenue: { heading: "Revenue Summary", stat: 1234567 },
  transactions: { heading: "Recent Transactions" },
  campaign: {
    heading: "Campaign",
    title: "$1,234,567 revenue generated",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
  },
  sales: { heading: "Sales Summary" },
  traffic: { heading: "Traffic Geography" },
};

export default function Dashboard() {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);

  return (
    <Box m={"20px"}>
      {/* HEADER & DOWNLOAD BUTTON */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to dashboard"} />
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

      {/* ROWS */}
      <Box
        display={"grid"}
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW1 - STATBOX 4X3*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            icon={MOCK_STAT.email.icon}
            stat={MOCK_STAT.email.stat}
            desc={MOCK_STAT.email.title}
            progress={MOCK_STAT.email.progress}
            increase={MOCK_STAT.email.increase}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            icon={MOCK_STAT.sales.icon}
            stat={MOCK_STAT.sales.stat}
            desc={MOCK_STAT.sales.title}
            progress={MOCK_STAT.sales.progress}
            increase={MOCK_STAT.sales.increase}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            icon={MOCK_STAT.clients.icon}
            stat={MOCK_STAT.clients.stat}
            desc={MOCK_STAT.clients.title}
            progress={MOCK_STAT.clients.progress}
            increase={MOCK_STAT.clients.increase}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            icon={MOCK_STAT.traffic.icon}
            stat={MOCK_STAT.traffic.stat}
            desc={MOCK_STAT.traffic.title}
            progress={MOCK_STAT.traffic.progress}
            increase={MOCK_STAT.traffic.increase}
          />
        </Box>

        {/* ROW2 - LINECHART 8 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* HEADING & DOWNLOAD */}
          <Box
            p={"25px 30px 0"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {MOCK_CHART.revenue.heading}
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {parseFloat(MOCK_CHART.revenue.stat).toLocaleString("en-US")}
              </Typography>
            </Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
          {/* LINECHART */}
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW2 - TRANSACTIONS 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          {/* HEADING */}
          <Box
            p={"15px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            colors={colors.grey[100]}
            borderBottom={`4px solid ${colors.primary[500]}`}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              {MOCK_CHART.transactions.heading}
            </Typography>
          </Box>
          {/* TRANSACTIONS */}
          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}-${index}`}
              p={"15px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                p={"5px 10px"}
                backgroundColor={colors.greenAccent[500]}
                borderRadius="4px"
                width={"60px"}
                textAlign={"center"}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 - PIE 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            {MOCK_CHART.campaign.heading}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <Box height="250px" width="250px" mt="-50px">
              <PieChart isDashboard />
            </Box>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "-40px" }}
            >
              {MOCK_CHART.campaign.title}
            </Typography>
            <Typography>{MOCK_CHART.campaign.desc}</Typography>
          </Box>
        </Box>

        {/* ROW 3 - BAR 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            {MOCK_CHART.sales.heading}
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard />
          </Box>
        </Box>

        {/* ROW 3 - GEOGRAPHY 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            {MOCK_CHART.traffic.heading}
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
