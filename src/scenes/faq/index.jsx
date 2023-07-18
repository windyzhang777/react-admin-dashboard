import { useTheme } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { allColors } from "../../theme";

const FAQ = [
  {
    header: "Question 1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex debitis commodi repudiandae dolorum voluptates deleniti, sit doloribus molestiae eveniet.`,
  },
  {
    header: "Question 2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex debitis commodi repudiandae dolorum voluptates deleniti, sit doloribus molestiae eveniet.`,
  },
  {
    header: "Question 3",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex debitis commodi repudiandae dolorum voluptates deleniti, sit doloribus molestiae eveniet.`,
  },
  {
    header: "Question 4",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex debitis commodi repudiandae dolorum voluptates deleniti, sit doloribus molestiae eveniet.`,
  },
];

export default function Faq({}) {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions"} />
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faw-content-1"
          id="faw-header-1"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            {FAQ[0].header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{FAQ[0].content}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faw-content-1"
          id="faw-header-1"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            {FAQ[1].header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{FAQ[1].content}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faw-content-1"
          id="faw-header-1"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            {FAQ[2].header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{FAQ[2].content}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faw-content-1"
          id="faw-header-1"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            {FAQ[3].header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{FAQ[3].content}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
