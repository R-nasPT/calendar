import React from "react";
// import { Toolbar } from "react-big-calendar";

const CustomToolbar = ({ onNavigate, label, view, onView }) => (
  <div
    style={{
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span style={{ display: "flex", alignItems: "center", gap:'15px' }}>
      <span
        onClick={() => onNavigate("TODAY")}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
        onMouseEnter={(event) => (event.target.style.backgroundColor = "gray")}
        onMouseOut={(event) => (event.target.style.backgroundColor = "")}
      >
        Today
      </span>
      <span
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px 16px",     
          cursor: "pointer",
        }}
        onMouseEnter={(event) => (event.target.style.backgroundColor = "gray")}
        onMouseOut={(event) => (event.target.style.backgroundColor = "")}
        onClick={() => onNavigate("PREV")}
      >
        {"<"}
      </span>
      <span
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
        onMouseEnter={(event) => (event.target.style.backgroundColor = "gray")}
        onMouseOut={(event) => (event.target.style.backgroundColor = "")}
        onClick={() => onNavigate("NEXT")}
      >
        {">"}
      </span>
      <h1 style={{color:'#3c506c'}}>{label}</h1>
    </span>
    <span>
      <select
        value={view}
        onChange={(e) => onView(e.target.value)}
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px 16px",
          marginLeft: "10px",
          fontSize:'20px'
        }}
      >
        <option value="month">Month</option>
        <option value="week">Week</option>
        <option value="day">Day</option>
        <option value="agenda">Agenda</option>
      </select>
    </span>
  </div>
);

export default CustomToolbar;
