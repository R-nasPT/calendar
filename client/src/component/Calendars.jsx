import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar";
import moment from "moment";
import { BsCalendarWeek } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { TbPhoto } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const localizer = momentLocalizer(moment);

export default function Calendars() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // console.log(events);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/calendar");
        // const dueDate = moment().toDate();

        const formattedEvents = response.data.map((event) => {
          // console.log(event.date.publishing_date);
          // console.log(event.date.due_date);
          const publishingDate = moment(event.date.publishing_date).toDate();
          const dueDate = moment(event.date.due_date).toDate();
          const shootingDate = moment(event.date.shooting_date).toDate();
          const pitchingDate = moment(event.date.pitching_date).toDate() ;

          return {
            title: event.content_name,
            start: dueDate,
            end: publishingDate,

            project_name: event.project_name,
            creative_type: event.creative_type,
            channel: event.channel,
            publishing_date: moment(publishingDate).format("D MMM YYYY - HH:mm"),
            due_date: moment(dueDate).format("D MMM YYYY - HH:mm"),
            shooting_date: moment(shootingDate).format("D MMM YYYY - HH:mm"),
            pitching_date: moment(pitchingDate).format("D MMM YYYY - HH:mm"),
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error retrieving calendar data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width:"1397px",
          display: "flex",
        }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          components={{
            toolbar: CustomToolbar,
          }}
          onSelectEvent={handleSelectEvent}
          style={{ width: "100vw" }}
        />
        {selectedEvent && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "10",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 12px 14px rgba(0, 0, 0, 0.2)",
                position: "relative",
                width: "350px",
              }}
            >
              <RxCross1
                onClick={closePopup}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "5px",
                  top: "5px",
                }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <div
                  style={{
                    backgroundColor: "#e1e1e1",
                    color: "#aeaeae",
                    padding: "10px 13px",
                    borderRadius: "5px",
                  }}
                >
                  P
                </div>
                <div>
                  <p style={{ color: "#cfd2d8" }}>
                    {" "}
                    {selectedEvent.project_name}
                  </p>
                  <p>{selectedEvent.title}</p>
                </div>
              </div>
              <div
                style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
              ></div>
              <div style={{ display: "flex", gap: "15px" }}>
                <BsCalendarWeek />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <p style={{ color: "#c1c5cd" }}>Due date</p>
                  <p>{selectedEvent.due_date.toLocaleString()}</p>
                  <p style={{ color: "#c1c5cd" }}>Publishing date</p>
                  <p>{selectedEvent.publishing_date.toLocaleString()}</p>
                  <p style={{ color: "#c1c5cd" }}>Shooting date</p>
                  <p>{selectedEvent.shooting_date.toLocaleString()}</p>
                  <p style={{ color: "#c1c5cd" }}>Pitching date</p>
                  <p>{selectedEvent.pitching_date.toLocaleString()}</p>
                </div>
              </div>
              <div style={{ padding: "20px 0 0 30px" }}>
                <p style={{ color: "#c1c5cd", paddingBottom: "5px" }}>Type</p>
                <p>Creative</p>
              </div>
              <div style={{ padding: "20px 0 0 30px" }}>
                <p style={{ color: "#c1c5cd" }}>Channal</p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <BiLogoFacebookSquare />
                  <p>{selectedEvent.channel}</p>
                </div>
              </div>
              <div style={{ padding: "20px 0 0 30px" }}>
                <p style={{ color: "#c1c5cd" }}>Creative type</p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <TbPhoto />
                  <p>{selectedEvent.creative_type}</p>
                </div>
              </div>
              <button
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  width: "310px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius:'10px'
                }}
                onMouseEnter={(event) =>
                  (event.target.style.backgroundColor = "#0062FF")
                }
                onMouseOut={(event) => (event.target.style.backgroundColor = "#3b82f6")}
              >
                <FaArrowUpRightFromSquare /> View content
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
