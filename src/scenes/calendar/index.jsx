import { useTheme } from "@emotion/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header";
import { allColors } from "../../theme";

const INITIAL_EVENTS = [
  {
    id: "2023-07-01",
    title: "test1",
    date: "2023-07-01",
  },
  {
    id: "2023-07-10",
    title: "test2",
    date: "2023-07-10",
  },
];

export default function Calendar({}) {
  const theme = useTheme();
  const colors = allColors(theme.palette.mode);
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    console.log(`eventList :`, JSON.stringify(eventList, null, 2));
  }, [eventList]);

  const handleDateClick = (selected) => {
    console.log(`selected :`, JSON.stringify(selected, null, 2));
    const title = prompt("enter event title");
    const calendarAPI = selected.view.calendar;
    calendarAPI.unselect();
    if (title) {
      calendarAPI.addEvent({
        id: `${selected.startStr}-${uuidv4()}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`confirm deleting the event ${selected.event.title}`)) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Interactive Calendar" />

      <Box display={"flex"} justifyContent={"space-between"}>
        {/* EVENT SIDEBAR */}
        <Box
          flex={"1 1 20%"}
          bgcolor={colors.primary[400]}
          p={"15px"}
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {eventList.map((evt) => (
              <ListItem
                key={evt.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={evt.title}
                  secondary={
                    <Typography>
                      {formatDate(evt.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box
          flex="1 1 100%"
          ml="15px"
          sx={{
            "& .fc-list-table .fc-list-day > *": {
              bgcolor: "transparent !important",
            },
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setEventList(events)}
            initialEvents={INITIAL_EVENTS}
          />
        </Box>
      </Box>
    </Box>
  );
}
