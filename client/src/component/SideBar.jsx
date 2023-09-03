import React from "react";
import { RxBackpack } from "react-icons/rx";
import { BsCalendarWeek, BsLayoutThreeColumns } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { FiSettings, FiChevronLeft } from "react-icons/fi";
import Calendars from "./Calendars";

export default function SideBar() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #ebecf0",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "30px 20px",
              gap: "10px",
              alignItems: "center",
              width: "250px",
            }}
          >
            <div
              style={{
                backgroundColor: "#fbbf0f",
                color: "white",
                padding: "10px 8px",
                borderRadius: "100%",
              }}
            >
              CD
            </div>
            <h3>Common Ground</h3>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontSize: "20px",
                padding: "15px 20px",
              }}
              onMouseEnter={(event) =>
                (event.target.style.backgroundColor = "#e6e6e6")
              }
              onMouseOut={(event) => (event.target.style.backgroundColor = "")}
            >
              <RxBackpack />
              <p> Project</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontSize: "20px",
                padding: "15px 20px",
              }}
              onMouseEnter={(event) =>
                (event.target.style.backgroundColor = "#e6e6e6")
              }
              onMouseOut={(event) => (event.target.style.backgroundColor = "")}
            >
              <BsCalendarWeek />
              <p>Calendar</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontSize: "20px",
                padding: "15px 20px",
              }}
              onMouseEnter={(event) =>
                (event.target.style.backgroundColor = "#e6e6e6")
              }
              onMouseOut={(event) => (event.target.style.backgroundColor = "")}
            >
              <BsLayoutThreeColumns />
              <p>Board</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontSize: "20px",
                padding: "15px 20px",
              }}
              onMouseEnter={(event) =>
                (event.target.style.backgroundColor = "#e6e6e6")
              }
              onMouseOut={(event) => (event.target.style.backgroundColor = "")}
            >
              <SlUser />
              <p>User Management</p>
            </div>
          </div>
          <div style={{ marginTop: "490px" }}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontSize: "20px",
                padding: "15px 20px",
              }}
              onMouseEnter={(event) =>
                (event.target.style.backgroundColor = "#e6e6e6")
              }
              onMouseOut={(event) => (event.target.style.backgroundColor = "")}
            >
              <FiSettings />
              <p>Setting</p>
            </div>
            <div
              style={{
                textAlign: "right",
                padding: "5px 20px",
                cursor: "pointer",
              }}
            >
              <FiChevronLeft />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              border: "1px solid #ebecf0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 30px",
              fontSize: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <BsCalendarWeek />
              <p>Calendar</p>
              <select
                style={{
                  padding: "15px 10px",
                  width: "150px",
                  borderRadius: "10px",
                }}
              >
                <option value="">All</option>
              </select>
            </div>
            <button
              style={{
                fontSize: "20px",
                color: "white",
                border: "none",
                backgroundColor: "#3b82f6",
                padding: "15px 20px",
                borderRadius: "10px",
              }}
            >
              + Create content
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "250px" }}>
              <img
                src="https://media.gcflearnfree.org/content/560be4f6557fa909dc9cf5a1_09_30_2015/googletips_calendar_mini.jpg"
                width={250}
                alt="calendar"
                style={{ padding: "20px 0" }}
              />
              <div
                style={{
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p>Filter date type</p>
                <div>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>Due date</span>
                </div>
                <div>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>Publishing date</span>
                </div>
                <div>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>Shooting date</span>
                </div>
                <div>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>Pitching date</span>
                </div>
              </div>
            </div>
            <Calendars />
          </div>
        </div>
      </div>
    </>
  );
}
